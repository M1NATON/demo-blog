import React, {useEffect, useState} from 'react';
import {auth, login, registration} from "../../store/action/user";
import {useDispatch} from "react-redux";
import {useAction} from "../../hooks/useAction";
import {successfullyRegistration} from "./SuccessfullyRegistration";
import {TextField} from "@mui/material";
import {useTypeSelector} from "../../hooks/UseTypeSelector";

const Login: React.FC = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState(false)
    const loginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
    const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const {login, registration} = useAction()
    const {error} = useTypeSelector(state => state.user)

    const clearErr = () => {
        setTimeout(() => {
            setErr(false)
        }, 2000)
    }


    const btnLogin = () => {

        if (!username && !password) {
            setErr(true)
            clearErr()
        } else {
            login(username, password)
        }


    }

    const btnRegistration = async () => {
        if (username === '' && password === '') {
            setErr(true)
            clearErr()
        } else {
            await registration(username, password)
            login(username, password)
            successfullyRegistration()
        }
    }
    console.log(error)

    return (
        <div className='m-auto container mt-[300px]'>
            <div className='w-[200px] mx-auto'>
                <div className="form">
                    <TextField
                        id="filled-error"
                        label="Имя пользователя"
                        variant="filled"
                        onChange={loginChange}
                        value={username}
                    />
                    <TextField
                        id="filled-password"
                        type='password'
                        label="Пароль"
                        variant="filled"
                        onChange={passwordChange}
                        value={password}
                    />
                    {error && <p className='text-red-500'>{error}</p>}
                    {err && <p className='text-red-500'>Вы не ввели данные</p>}
                </div>

                <div className="btnBlock flex justify-between">
                    <button type='submit' onClick={btnLogin}
                            className='border-2 bg-green-400 px-4 py-2 text-cyan-50'>login
                    </button>
                    <button type='submit' onClick={btnRegistration}
                            className='border-2 bg-yellow-400 px-4 py-2 text-cyan-50'>Registration
                    </button>
                </div>

                <h1 className='registrationBlock' style={{display: 'none'}}>Успешно</h1>
            </div>
        </div>
    );
};

export default Login;