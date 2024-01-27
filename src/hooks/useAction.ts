import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from '../store/action/index'

export const useAction = () => {
    const dispatch = useDispatch<any>()
    return bindActionCreators(ActionCreators, dispatch)
}