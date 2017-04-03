import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import { BrowserRouter } from 'react-router-dom'

import App from './components/App'
import "./main.css"
import { wordsDict } from "./default_words_dict.json"

render(
    <BrowserRouter >
        <App wordsDict={wordsDict} />
    </BrowserRouter>,
    document.getElementById('mount-point')
);
