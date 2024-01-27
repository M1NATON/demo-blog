import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter} from "react-router-dom";
import './index.css'
import {ModalState} from "./context/ModalContxt";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Provider store={store}>
            <ModalState>
                <App/>
            </ModalState>
        </Provider>
    </BrowserRouter>
)
