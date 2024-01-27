
export enum UserActionType {
    SET_USER = 'SET_USER',
    LOADING_USER = 'LOADING_USER',
    LOGOUT = 'LOGOUT'
}
interface User{
    id: number;
    username: string
}

export interface UserState{
    user: User,
    loading: boolean,
    isAuth: boolean
}

interface LoadingUserAction {
    type: UserActionType.LOADING_USER
}

interface SetUserAction {
    type: UserActionType.SET_USER
    payload: User
}

interface LogoutAction {
    type: UserActionType.LOGOUT
}


export type UserAction = SetUserAction | LogoutAction | LoadingUserAction;