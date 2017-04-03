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
    state = {
        user: {
            isAdmin: false,
            isAuthenticated: false,
            login: "",
            userName: "",
            isGettingUserInfo: false,
            wordsProgress: null
        },
        //нормальізована структура даних із усіма словами(для усіх користувачів)
        wordsDict: this.props.wordsDict || [],
        //масив слів із врахуванням прогресу для цього користувача
        wordsUserDictArr: this.transformWordsDictToWordsUserDictArr(this.props.wordsDict || []),
        isShownAuthModal: false
    };
    //
    // componentDidMount() {
    //     this.getUserInfo();
    // }
    //
    // getUserInfo = () => {
    //     this.setState(
    //         {user: window.localStorage.getItem('user')}
    //         );
    //
    // };

    transformWordsDictToWordsUserDictArr(wordsDict, userData = {}) {
        return Object.values(wordsDict).map(el => {
            return {
                ...el,
                correct: userData.wordsProgress && userData.wordsProgress[el.id] && userData.wordsProgress[el.id].correct || 0,
                wrong:  userData.wordsProgress && userData.wordsProgress[el.id] && userData.wordsProgress[el.id].wrong || 0,
            }
        });
    }

    onAuthFormSubmit = ({login, password}) => {
        if(login == "admin" && password == "123")
            this.setState({
                user: {
                    isAdmin: true,
                    isAuthenticated: true,
                    login,
                    userName: "Адміністратор",
                    isGettingUserInfo: false
                },
                isShownAuthModal: false
            });
        else if(login == "user" && password == "123") {
            let userData = {
                isAdmin: false,
                isAuthenticated: true,
                login,
                userName: "Максим",
                isGettingUserInfo: false,
                wordsProgress: {
                    be: {
                        correct: 5,
                        wrong: 1
                    },
                    come: {
                        correct: 1,
                        wrong: 3
                    },
                    do: {
                        correct: 2,
                        wrong: 2
                    },
                    drink: {
                        correct: 0,
                        wrong: 1
                    },
                }
            };

            let wordsUserDictArr = this.transformWordsDictToWordsUserDictArr(this.state.wordsDict, userData);

            this.setState({
                user: userData,
                isShownAuthModal: false,
                wordsUserDictArr
            });

        }
        else {
            let newUserName = prompt(
                "Такого користувача не знайдено! Створити нового користувача з таким логіном і паролем?",
                "Введіть тут ім'я нового користувача..."
            );

            //TODO: Записати значення нового користувача у localStorage

            if(newUserName)
                this.setState({
                    user: {
                        isAdmin: false,
                        isAuthenticated: true,
                        login,
                        userName: newUserName,
                        isGettingUserInfo: false
                    },
                    isShownAuthModal: false
                });
        }
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
            isShownAuthModal: false
        });
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
                        <Route path="/admin" component={AdminBox} />
                        <Route path="/study" render={pr => {
                            return <StudyBox
                                {...pr}
                                wordsDict={this.state.wordsUserDictArr}
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
