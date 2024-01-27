import {useContext, useEffect} from 'react';
import {useTypeSelector} from "../hooks/UseTypeSelector";
import Post from "./Post";
import {useAction} from "../hooks/useAction";
import {ModalContext} from "../context/ModalContxt";
import Modal from "./Modal";
import CreatePost from "./CreatePost";
import {Button} from "@mui/material";

const HomePages = () => {

    const {user} = useTypeSelector(state => state.user)


    const {auth, logout,} = useAction()
    const {open, close, modal} = useContext(ModalContext)


    useEffect(() => {
        auth()
    }, [])

    const btnExit = () => {
        logout()
    }
    const openModal = () => {
        open()
    }
    const closeModal = () => {
        close()
    }

    const token = localStorage.getItem('token')
    return (
        <div className='w-[600px] mx-auto'>
            <h1 className='text-3xl'>Вы вошли {user.username}</h1>

            <div>{token ? <h1>Токен есть</h1> : <h1>токена нет</h1>}</div>

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