import React, {StrictMode} from 'react'
import {render} from 'react-dom';
import App from "./app";
import './index.css'

const root = document.getElementById('root')
render(
    <StrictMode>
        <App/>
    </StrictMode>,
    root
)
