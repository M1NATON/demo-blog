import React, {useEffect} from "react";
import {useTypeSelector} from "./hooks/UseTypeSelector";
import AppRouter from "./components/AppRouter";
import {useAction} from "./hooks/useAction";



function App(){

    const {loading} = useTypeSelector(state => state.user)
    const {auth} = useAction()

    useEffect(() => {
        auth()
    }, [])


    if (loading) { // @ts-ignore
        return <h1>Загрузка</h1>
    }

    // @ts-ignore
    return (
        <>
            <div>
                <AppRouter/>
            </div>


        </>
    )
}

export default App
