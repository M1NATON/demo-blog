import React, {useContext, useEffect, useState} from 'react';
import {Button, TextField} from "@mui/material";
import {useTypeSelector} from "../hooks/UseTypeSelector";
import SendIcon from '@mui/icons-material/Send';
import {useAction} from "../hooks/useAction";
import {ModalContext} from "../context/ModalContxt";
const CreatePost = () => {

    const {user} = useTypeSelector(state => state.user)
    const {postPost, postList} = useAction()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const {close} = useContext(ModalContext)
    const titleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const contentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value)
    }

    const btnAddPost = async (event: React.FormEvent) => {
        event.preventDefault()
        setTitle('')
        setContent('')
        const  author = user.id
        await postPost(title, content, author)
        postList()
        close()
    }



    return (
        <form>
            <div className='w-[300px] mx-auto mb-10'>
                <TextField
                    id="outlined-basic"
                    label="Заголовок"
                    variant="outlined"
                    size="small"
                    value={title}
                    onChange={titleChange}
                />
            </div>
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
            <div className='text-end'>
                <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={btnAddPost}
                >
                    Опубликовать
                </Button>
            </div>
        </form>
    );
};

export default CreatePost;