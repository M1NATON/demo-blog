import React, {useEffect} from "react";
import {useTypeSelector} from "./hooks/UseTypeSelector";
import AppRouter from "./components/AppRouter";
import {useAction} from "./hooks/useAction";
import Loading from "./components/Loading";



function App(){

    const {loading} = useTypeSelector(state => state.user)
    const {auth} = useAction()

    useEffect(() => {
        auth()
    }, [])


    if (loading) return <Loading/>


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
