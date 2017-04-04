import React, { Component } from 'react'
//import mathDocumentTitleByPathName from "../../utils/mathDocumentTitleByPathName"

import {
    Route,
    Redirect,
    Switch
} from 'react-router-dom'

import AboutBox from '../AboutBox'
import AdminBox from '../AdminBox'
import StudyBox from '../StudyBox'
import MainLayout from '../MainLayout'
import StatisticsBox from '../StatisticsBox'
import HelpBox from '../HelpBox'
import NotFound from '../NotFound'

//import NavLink from '../NavLink'
import LoginBox from '../LoginBox/index.jsx'

export default class App extends Component {
    constructor(props) {
        super(props);
        let wordsDict = this.getWordsDict();
        this.state = {
            user: {
                isAdmin: false,
                isAuthenticated: false,
                login: "",
                userName: "",
                isGettingUserInfo: false,
                wordsProgress: null
            },
            //нормальізована структура даних із усіма словами(для усіх користувачів)
            wordsDict,
            //масив слів із врахуванням прогресу для цього користувача
            wordsUserDictArr: this.transformWordsDictToWordsUserDictArr(wordsDict),
            isShownAuthModal: false
        };
    }

    getWordsDict = () => {
        try {
            return JSON.parse(localStorage.wordsDict);
        } catch (err) {
            alert("БД слів пошкоджено. Перезавантажте програму.");
            localStorage.removeItem("wordsDict");
            return {};
        }
    };

    transformWordsDictToWordsUserDictArr(wordsDict = {}, userData = {}) {
        return Object.values(wordsDict).map(el => {
            return {
                ...el,
                correct: userData.wordsProgress && userData.wordsProgress[el.id] && userData.wordsProgress[el.id].correct || 0,
                wrong:  userData.wordsProgress && userData.wordsProgress[el.id] && userData.wordsProgress[el.id].wrong || 0,
            }
        });
    }

    onAuthFormSubmit = ({login, password}) => {
        let user, llUsers = {};
        try {
            llUsers = JSON.parse(localStorage.users);
        } catch (err) {
            alert("БД користувачів пошкоджено. Перезавантажте програму.");
            localStorage.removeItem("users");
            return;
        }

        if(llUsers[login]) {
            if(llUsers[login].password == password) {
                user = {
                    ...llUsers[login],
                    isAuthenticated: true,
                    isGettingUserInfo: false,
                };
            }
            else
                return alert("Введено неправильний пароль.")
        } else {
            //Створюємо нового користувача
            let newUserName = prompt(
                "Такого користувача не знайдено! Створити нового користувача з таким логіном і паролем?",
                "Введіть тут ім'я нового користувача..."
            );

            if(newUserName) {
                user = {
                    isAdmin: false,
                    isAuthenticated: true,
                    login,
                    password,
                    userName: newUserName,
                    isGettingUserInfo: false
                };
                llUsers[login] = user;
                localStorage.users = JSON.stringify(llUsers);
            }
            else return null;
        }

        this.setState({
            user: user,
            isShownAuthModal: false,
            wordsUserDictArr: this.transformWordsDictToWordsUserDictArr(this.state.wordsDict, user)
        });
    };

    logOutUser = () => {
        this.setState({
            user: {
                isAdmin: false,
                isAuthenticated: false,
                login: "",
                userName: "",
                isGettingUserInfo: false
            },
            isShownAuthModal: false,
            wordsUserDictArr: this.transformWordsDictToWordsUserDictArr(this.state.wordsDict),
        });
    };

    updateUserWordsProgress = (testResults) => {
        let llUsers,
            newWordsProgress = {},
            newUserData;

        testResults.forEach(el => {
            let oldCorrect = this.state.user.wordsProgress[el.id] && this.state.user.wordsProgress[el.id].correct || 0,
                oldWrong = this.state.user.wordsProgress[el.id] && this.state.user.wordsProgress[el.id].wrong || 0;
            newWordsProgress[el.id] = {
                correct: oldCorrect + (el.pastSimpleInpIsRight && 0.5 || 0) + (el.pastParticipleInpIsRight && 0.5 || 0),
                wrong: oldWrong + (!el.pastSimpleInpIsRight && 0.5 || 0) + (!el.pastParticipleInpIsRight && 0.5 || 0),
            }
        });

        newUserData = {
            ...this.state.user,
            wordsProgress: {
                ...this.state.user.wordsProgress,
                ...newWordsProgress
            }
        };

        try {
            llUsers = JSON.parse(localStorage.users);
        } catch (err) {
            alert("БД користувачів пошкоджено! Перезавантажте програму.");
            localStorage.removeItem("users");
            return null;
        }

        llUsers[this.state.user.login] = newUserData;
        localStorage.users = JSON.stringify(llUsers);

        this.setState({
            user: newUserData,
            wordsUserDictArr: this.transformWordsDictToWordsUserDictArr(this.state.wordsDict, newUserData),
        })
    };

    onCloseModal = () => this.setState({isShownAuthModal: false});

    showAuthModal = () => this.setState({isShownAuthModal: true});

    render() {
        return (
            <div className='container'>
                <LoginBox
                    user={this.state.user}
                    showModal={this.state.isShownAuthModal}
                    onAuthFormSubmit={this.onAuthFormSubmit}
                    onCloseModal={this.onCloseModal}
                />
                <MainLayout
                    showAuthModal={this.showAuthModal}
                    user={this.state.user}
                    logOutUser={this.logOutUser}
                    wordsDict={this.state.wordsUserDictArr}
                >
                    <Switch>
                        <Redirect exact from="/" to='about' />
                        <Route path="/about" component={AboutBox} />
                        <Route path="/admin" render={prps => {
                            return <AdminBox
                                {...prps}
                                wordsDict={this.state.wordsDict}
                            />
                        }}

                        />
                        <Route path="/study" render={prps => {
                            return <StudyBox
                                {...prps}
                                wordsDict={this.state.wordsUserDictArr}
                                updateUserWordsProgress={this.updateUserWordsProgress}
                            />
                        }} >
                            {/*<Route path="theory" component={Theory} />*/}
                            {/*<Route path="test*" component={Test} />*/}
                        </Route>
                        <Route path="/statistics" component={StatisticsBox}/>
                        <Route path="/help" component={HelpBox}/>
                        <Route path='*' component={NotFound} />
                    </Switch>
                </MainLayout>
            </div>
        )
    }
}
