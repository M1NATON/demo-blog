
export enum UserActionType {
    SET_USER = 'SET_USER',
    LOADING_USER = 'LOADING_USER',
    LOGOUT = 'LOGOUT',
    ERROR = 'ERROR'
}
interface User{
    id: number;
    username: string
}

export interface UserState{
    user: User,
    loading: boolean,
    isAuth: boolean,
    error: string | null
}

interface LoadingUserAction {
    type: UserActionType.LOADING_USER
}
interface ErrorUserAction {
    type: UserActionType.ERROR
    payload: string
}

interface SetUserAction {
    type: UserActionType.SET_USER
    payload: User
}

interface LogoutAction {
    type: UserActionType.LOGOUT
}


export type UserAction = SetUserAction | LogoutAction | LoadingUserAction | ErrorUserAction