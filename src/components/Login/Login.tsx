import React, {useEffect, useState} from 'react';
import {auth, login, registration} from "../../store/action/user";
import {useDispatch} from "react-redux";
import {useAction} from "../../hooks/useAction";
import {successfullyRegistration} from "./SuccessfullyRegistration";

const Login: React.FC = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const loginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
    const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const {login, registration} = useAction()
    const btnLogin = () => {
        login(username, password)
    }



    const btnRegistration = () => {
        registration(username, password)
        setUsername('')
        setPassword('')
        successfullyRegistration()
    }


    return (
        <div className='m-auto container mt-[300px]'>
            <div className='w-[200px] mx-auto'>
                <div className="form">
                    <input
                        type='text'
                        placeholder='login'
                        onChange={loginChange}
                        value={username}
                        className='border-2 p-2'
                    />
                    <input
                        type='password'
                        placeholder='password'
                        onChange={passwordChange}
                        value={password}
                        className='border-2 p-2'
                    />
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