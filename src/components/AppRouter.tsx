import React from 'react';
import {useTypeSelector} from "../hooks/UseTypeSelector";
import {Navigate, Route, Routes} from "react-router-dom";
import HomePages from "./HomePages";
import Login from "./Login";


const AppRouter: React.FC = () => {
    const {isAuth} = useTypeSelector(state => state.user)

    return (
        <div>
            {
                isAuth ? <Routes>
                        <Route
                            element={<HomePages/>}
                            path='/home'
                            key='/home'
                        />
                        <Route path='/*' element={<Navigate to='/home'/>}/>
                    </Routes>
                    : <Routes>
                        <Route
                            element={<Login/>}
                            path='/login'
                            key='/login'
                        />
                        <Route path='/*' element={<Navigate to='/login'/>}/>
                    </Routes>

            }
        </div>
    );
};

export default AppRouter;