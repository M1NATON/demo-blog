import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {useTypeSelector} from "../../hooks/UseTypeSelector";
import DeleteIcon from "@mui/icons-material/Delete";
import {AuxiliaryFunctions} from "../../hooks/AuxiliaryFunctions";
import EditIcon from '@mui/icons-material/Edit';
import Modal from "../Modal";
import {Button, TextField} from "@mui/material";
import {useAction} from "../../hooks/useAction";
import SendIcon from "@mui/icons-material/Send";



const PostItem = ({post}: any) => {


    const {user} = useTypeSelector(state => state.user)
    const {postUpdate, postList} = useAction()
    const {handleDeletePost, removeSeconds} = AuxiliaryFunctions()
    const [content, setContent] = useState(post.content)
    const [title, setTitle] = useState(post.title)
    const [edited, setEdited] = useState(false)

    const [modalUpdate, setModalUpdate] = useState(false)
    const closeModal = () => setModalUpdate(false)
    const openModal = () => setModalUpdate(true)
    const contentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value)
    }
    const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const DeletePost = (user: number, author: number, postId: any) => {

        if (user === author) {
            return <div className='flex justify-between flex-row-reverse'>
                <button onClick={() => handleDeletePost(postId)}><DeleteIcon/></button>
                <button onClick={openModal}><EditIcon/></button>
            </div>
        }
    }

    const btnUpdateText = async (e: React.FormEvent) => {
        e.preventDefault()
        await postUpdate(post.id, content, title)
        setEdited(true)
        setContent('')
        postList()
    }

    return (
        <>
            <div key={post.id}
                 className='border-2 mb-[30px] p-[15px] border-black transition-all'
            >
                <div className='flex justify-between'>
                    <h1 className='text-2xl hover:underline'><Link to={`/post/${post.id}`}>{post.title}</Link></h1>
                    <p>Автор: {post.author} {DeletePost(user.id, post.author_id, post.id)} </p>
                </div>
                <p>{post.content}</p>
                <p>Дата создания: {new Date(post.day).toLocaleDateString()}</p>
                <p>Время создания: {removeSeconds(post.time)} {edited && <span>(редактировано)</span>}</p>
            </div>

            {
                modalUpdate && <Modal onClose={closeModal} title='Редактировать'>
                    <p className='w-[300px] mx-auto mb-10 text-2xl'>
                        <TextField
                            id="outlined-basic"
                            label="Заголовок"
                            variant="outlined"
                            size="small"
                            value={title}
                            onChange={titleChange}
                        />
                    </p>
                    <div className='text-center mb-20'>
                        <TextField
                            id="outlined-multiline-static"
                            label="Описания"
                            multiline
                            rows={4}
                            className='w-[300px]'
                            value={content}
                            onChange={contentChange}
                        />
                    </div>
                    <Button
                        variant="contained"
                        endIcon={<SendIcon/>}
                        onClick={btnUpdateText}
                    >
                        Изменить
                    </Button>
                </Modal>
            }
        </>


    );
};

export default PostItem;