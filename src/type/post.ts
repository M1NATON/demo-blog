
export enum PostActionType{
    POST_FETCH = 'POST_FETCH',
    POST_FETCH_GET = 'POST_FETCH_GET',
    POST_FETCH_POST = 'POST_FETCH_POST',
    POST_FETCH_ERROR = 'POST_FETCH_ERROR'
}

export interface IPost {
    id?: number,
    title: string
    content: string
    author: number
    created_at: string
}


export interface PostState {
    post: IPost[],
    loading: boolean,
    error: string | null
}


interface PostFetchAction {
    type: PostActionType.POST_FETCH
}

interface PostFetchPostAction {
    type: PostActionType.POST_FETCH_POST
    payload: IPost
}

interface PostFetchSuccessAction{
    type: PostActionType.POST_FETCH_GET
    payload: IPost[]
}

interface PoseFetchErrorAction {
    type: PostActionType.POST_FETCH_ERROR
    payload?: any
}

export type PostAction = PostFetchAction | PostFetchSuccessAction | PoseFetchErrorAction | PostFetchPostAction