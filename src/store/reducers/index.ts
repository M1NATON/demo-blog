import {combineReducers} from "redux";
import {authReducer} from './userReducer'
import {postReducer} from "./postReducer";

export const rootReducer = combineReducers({
    user: authReducer,
    post: postReducer
})

export type RootState = ReturnType<typeof rootReducer>