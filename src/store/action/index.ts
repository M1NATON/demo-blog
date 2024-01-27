import * as PostActionCreators from './post'
import * as UserActionCreators from './user'



export default {
    ...PostActionCreators,
    ...UserActionCreators
}