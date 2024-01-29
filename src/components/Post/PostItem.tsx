import React from 'react';
import {Link} from "react-router-dom";
import {useTypeSelector} from "../../hooks/UseTypeSelector";
import DeleteIcon from "@mui/icons-material/Delete";
import {AuxiliaryFunctions} from "../../hooks/AuxiliaryFunctions";


const PostItem = ({post}: any) => {


    const {user} = useTypeSelector(state => state.user)
    const {handleDeletePost, removeSeconds} = AuxiliaryFunctions()

    const DeletePost = (user: number, author: number, postId: any) => {

        if (user === author) {
            return <button onClick={() => handleDeletePost(postId)}><DeleteIcon/></button>
        }
    }

    return (
        <Link to={`/post/${post.id}`}>
            <div key={post.id}
                 style={{
                     border: '1px solid black',
                     marginBottom: '30px',
                     padding: '15px'
                 }}

            >
                <div className='flex justify-between'>
                    <h1 className='text-2xl'>{post.title}</h1>
                    <p>Автор: {post.author} {DeletePost(user.id, post.author_id, post.id)}</p>
                </div>
                <p>{post.content}</p>
                <p>Дата создания: {new Date(post.day).toLocaleDateString()}</p>
                <p>Время создания: {removeSeconds(post.time)}</p>
            </div>
        </Link>

    );
};

export default PostItem;