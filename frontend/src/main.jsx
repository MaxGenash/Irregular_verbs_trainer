import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import { BrowserRouter } from 'react-router-dom'

import App from './components/App'
import "./main.css"
import { wordsDict } from "./default_words_dict.json"
import { users } from "./default_users_DB.json"

//записуємо у localstoradge БД користувачів і слів
(function createDB(wordsDict, users) {
    if(!localStorage.wordsDict)
        localStorage.wordsDict = JSON.stringify(wordsDict);
    if(!localStorage.users)
        localStorage.users = JSON.stringify(users);
})(wordsDict, users);

render(
    <BrowserRouter >
        <App />
    </BrowserRouter>,
    document.getElementById('mount-point')
);
