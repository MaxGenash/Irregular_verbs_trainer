import React, {Component} from "react";
import {Modal} from "react-bootstrap"

import LoginBoxAuthForm from "../LoginBoxAuthForm";
import LoadingBlock from "../LoadingBlock"

import "./styles.css";

export default class LoginBox extends Component {
    // static onEnter(nextState, replace) {
    //     if(this.props.user && this.props.user.isAuthenticated && this.props.user.login == 'admin')
    //         replace('/admin');
    //     else if(this.props.user && this.props.user.isAuthenticated && this.props.user.login)
    //         replace('/theory');
    // }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onAuthFormSubmit({
            login: e.target.elements[0].value,
            password: e.target.elements[1].value
        });

        // const login = e.target.elements[0].value;
        // window.localStorage.setItem('rr_login', login);

        // if (login === 'admin') {
        //     this.context.router.push('/admin')
        // } else {
        //     this.context.router.push('/theory')
        // }
    }

    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.onCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title> Авторизація </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginBoxAuthForm
                        user={this.props.user}
                        onSubmit={this.handleSubmit}
                    />
                </Modal.Body>
                {/*<Modal.Footer>*/}
                    {/*<Button onClick={this.close}>Close</Button>*/}
                {/*</Modal.Footer>*/}
            </Modal>
        )
    }
}
