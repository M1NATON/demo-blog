import {UserAction, UserActionType, UserState} from "../../type/user";


const token = localStorage.getItem('token')

const initialState: UserState = {
    user: {id: 0, username: ''},
    loading: false,
    isAuth: !!token
};

export const authReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionType.LOADING_USER:
            return {user: {id: 0, username: ''}, isAuth: false, loading: true}
        case UserActionType.SET_USER:
            return {user: action.payload, isAuth: true, loading: false}
        case 'LOGOUT':
            localStorage.removeItem('token')
            return {isAuth: false, loading: false, user: {id: 0, username: ''}};
        default:
            return state;
    }
};

// @ts-ignore
export const setUser = user => ({type: UserActionType.SET_USER, payload: user})
