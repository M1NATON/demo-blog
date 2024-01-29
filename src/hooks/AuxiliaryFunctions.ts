import {useAction} from "./useAction";
import {useNavigate} from "react-router-dom";


export const AuxiliaryFunctions = () => {

    const {postList, postDelete} = useAction()
    const navigate = useNavigate()

    const handleDeletePost = async (postId: number) => {
        try {

            await postDelete(postId)
            navigate('/home')
            postList()
        } catch (e) {
            console.log('Пост не удален')
        }
    }

    const removeSeconds = (timeString: string) => {
        if (timeString) {
            const [hours, minutes] = timeString.split(':');
            return `${hours}:${minutes}`;
        }
        return '';
    };
    return {
        handleDeletePost,
        removeSeconds,
    };
}

