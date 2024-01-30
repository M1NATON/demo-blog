import {Dispatch} from "react";
import {setUser} from "../reducers/userReducer";
import axios from "axios";
import {UserActionType} from "../../type/user";
import {findRenderedComponentWithType} from "react-dom/test-utils";


interface IUser {
    id?: number
    username: string
    password: string
}


export const registration: any =  (username: string, password: string) => {
    return async  (dispatch: Dispatch<any>) => {
        try {
            const response = await axios.post<IUser>('http://localhost:8000/api/register', {
                username,
                password
            })
            console.log(response.data)

        } catch (e) {
            dispatch({
                type: UserActionType.ERROR,
                // @ts-ignore
                payload: e.response.data.message
            })
        }
    }
}


export const login: any = (username: string, password: string) => {

    return async (dispatch: Dispatch<any>) => {
        try {
            dispatch({type: UserActionType.LOADING_USER})
            const response = await axios.post<IUser>('http://localhost:8000/api/login', {
                username,
                password
            })
            // @ts-ignore
            const token = response.data.token
            if (token) {
                setTimeout(() => {
                    // @ts-ignore
                    dispatch(setUser(response.data.user))
                }, 2000)
                localStorage.setItem('token', token)
            } else {
                console.log('токена нет')
            }


        } catch (e) {
            dispatch({
                type: UserActionType.ERROR,
                // @ts-ignore
                payload: e.response.data.message
            })
        }
    }
}

export const auth = () => {
    return async (dispatch: Dispatch<any>) => {
        const token = localStorage.getItem('token')
        if (!token) {
            return
        }
        try {
            const response = await axios.get(`http://localhost:8000/api/auth`, {
                headers: {Authorization: `Bearer ${token}`}
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e: any) {
            if (e.response && e.response.status === 401) {

                localStorage.removeItem('token');
            } else {
                alert("Error while fetching user data.");
            }
        }
    }
}

export const logout = () => ({type: UserActionType.LOGOUT})
