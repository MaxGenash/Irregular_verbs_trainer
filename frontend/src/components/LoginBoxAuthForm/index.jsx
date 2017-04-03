import React, {Component} from "react";
import classNames from "classnames"

import "./styles.css";

export default class LoginBoxAuthForm extends Component {
    render() {
        let submitBtnSpinnerClassName = classNames({
                "hidden": this.props.user && !this.props.user.isGettingUserInfo
            }),
            submitBtnIsDisabled = this.props.user && this.props.user.isGettingUserInfo;
        return (
            <form id="auth-form" onSubmit={this.props.onSubmit} className="auth-form" role="form">
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon"> <i className="icon-append fa fa-user" /> </span>
                        <input
                            type="text"
                            className="form-control"
                            id="auth-form-login"
                            name="username"
                            placeholder="Логін" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon"> <i className="icon-append fa fa-lock" /> </span>
                        <input
                            type="password"
                            className="form-control"
                            id="auth-form-pass"
                            name="password"
                            placeholder="Пароль" />
                    </div>
                </div>
                <div className="form-group text-center">
                    <button
                        disabled={submitBtnIsDisabled}
                        type="submit"
                        className="btn btn-primary btn-block auth-form-submit-btn"
                    >
                        <span className="btn-label"> Увійти </span>
                        <span className={submitBtnSpinnerClassName} >
                            <i className="fa fa-spinner fa-pulse" />
                        </span>
                    </button>
                </div>
            </form>
        );
    }
}
