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
            isGettingUserInfo: false
        },
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
        else if(login == "user" && password == "123")
            this.setState({
                user: {
                    isAdmin: false,
                    isAuthenticated: true,
                    login,
                    userName: "Максим",
                    isGettingUserInfo: false
                },
                isShownAuthModal: false
            });
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
                >
                    <Switch>
                        <Redirect exact from="/" to='about' />
                        <Route path="/about" component={AboutBox} />
                        <Route path="/admin" component={AdminBox} />
                        <Route path="/study" component={StudyBox} >
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
