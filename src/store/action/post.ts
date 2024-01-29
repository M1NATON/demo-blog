import {Dispatch} from "react";
import {IPost, PostAction, PostActionType} from "../../type/post";
import axios from "axios";


export const postList:any = () => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostActionType.POST_FETCH})
            const response = await axios.get<IPost[]>('http://localhost:8000/api/posts')
                dispatch({
                    type: PostActionType.POST_FETCH_GET,
                    payload: response.data
                })


        } catch (e) {
            dispatch({
                type: PostActionType.POST_FETCH_ERROR,
                payload: 'error'
            })
        }
    }
}

export const postDelete:any = (postID: number) =>{
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostActionType.POST_FETCH})
            const token = localStorage.getItem('token')
            const response = await axios.delete(`http://localhost:8000/api/posts/${postID}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch({
                type: PostActionType.POST_FETCH_DETAILS,
                payload: response.data
            })

        } catch (e) {
            console.log('delete error', e)
        }
    }
}

export const postDetails: any = (postId: number) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostActionType.POST_FETCH})

            const response = await axios.get<IPost>(`http://localhost:8000/api/post/${postId}`)
            dispatch({
                type: PostActionType.POST_FETCH_DETAILS,
                payload: response.data
            })

        } catch (e) {
            console.log('Error item post', e)
        }

    }
}

export const postPost: any = (title: string, content:string, author_id: number) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            const response = await axios.post('http://localhost:8000/api/posts',{
                title,
                content,
                author_id
            })
            dispatch({
                type: PostActionType.POST_FETCH_POST,
                payload: response.data
            })
        } catch (e) {
            console.log('Ошибка в создании поста', e)
        }
    }
}


