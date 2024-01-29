import React, {useContext, useEffect} from 'react';
import {useTypeSelector} from "../hooks/UseTypeSelector";
import Post from "./Post/Post";
import {useAction} from "../hooks/useAction";
import {ModalContext} from "../context/ModalContxt";
import Modal from "./Modal";
import CreatePost from "./Post/CreatePost";
import {Button} from "@mui/material";
import List from "./List";
import {IPost} from "../type/post";
import {useNavigate} from "react-router-dom";

const HomePages = () => {

    const {user} = useTypeSelector(state => state.user)

    const {auth, logout} = useAction()
    const {open, close, modal} = useContext(ModalContext)

    useEffect(() => {
        auth()
    }, [])

    const btnExit = () => logout()
    const openModal = () => open()
    const closeModal = () => close()

    return (
        <div className='w-[600px] mx-auto'>
            <h1 className='text-3xl my-10 border-4 rounded-3xl px-4 py-2'>Здравствуйте
                пользователь: {user.username}</h1>

            <div className="flex justify-between flex-row-reverse">
                <Button variant="outlined" color="error" onClick={btnExit}>
                    Выйти
                </Button>
                <div>
                    <Button onClick={openModal} variant="contained">Написать пост</Button>
                    {
                        modal && <Modal title='Написать пост' onClose={closeModal}>
                            <CreatePost/>
                        </Modal>
                    }
                </div>
            </div>

            <div>
                <h1>Список всех постов</h1>
                <Post/>
            </div>
        </div>
    );
};

export default HomePages;