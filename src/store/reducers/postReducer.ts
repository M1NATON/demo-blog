import {PostAction, PostActionType, PostState} from "../../type/post";


const initialState: PostState = {
    post: [],
    loading: false,
    error: null
}


export const postReducer = (state = initialState, action: PostAction):PostState => {
    switch (action.type) {
        case PostActionType.POST_FETCH:
            return {loading: true, error: null, post: []}
        case PostActionType.POST_FETCH_GET:
            return {loading: false, post: action.payload, error: null}
        case PostActionType.POST_FETCH_ERROR:
            return {loading: false, post: [], error: action.payload}
        case PostActionType.POST_FETCH_POST:
            return {loading: false, error: null, post: [...state.post, action.payload]}
        default:
            return state
    }
}