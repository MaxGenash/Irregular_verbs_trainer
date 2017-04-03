import React, {Component} from "react";
import "./styles.css";
import { Popover, OverlayTrigger } from 'react-bootstrap'
import NavLink from "../NavLink"

function HeaderUserInner(props) {
    if(props.userIsAuthenticated)
        return (
            <div className="header-user-inner">
                <a className="header-user-link" href="javascript:void(0)">
                    <span className="fa-stack fa-2x header-user-img--without-photo">
                        <i className="fa fa-user fa-stack-1x"/>
                    </span>
                    <span className="header-user-caption">
                        Вітаємо,<br />
                        <span className="user-name" title={props.userName}>
                            {props.userName}
                        </span>
                    </span>
                </a>
                <ul className="dropdown-menu header-user-menu" >
                    <li className="">
                        <a
                            href="javascript:void(0)"
                            className="btn-block btn-flat header-user-menu-item btn-logout"
                            onClick={props.logOutUser}
                        >
                            Вихід з аккаунта {" "}
                            <i className="fa fa-sign-out" />
                        </a>
                    </li>
                </ul>
            </div>
        );
    else
        return (
            <div className="header-user-inner">
                <a
                    className="header-user-link"
                    href="javascript:void(0)"
                    onClick={props.showAuthModal}
                >
                    <span className="fa-stack fa-2x header-user-img--without-photo">
                        <i className="fa fa-user fa-stack-1x"/>
                    </span>
                    <span className="header-user-caption header-user-caption--unauthorized">
                        Авторизуватися
                    </span>
                </a>
            </div>
        );
}

export default function HeaderUserBlock(props) {
    return (
        <div className="header-user">
            <HeaderUserInner
                userIsAuthenticated={props.user && props.user.isAuthenticated}
                userName={props.user && props.user.userName || "Шановний користувач"}
                logOutUser={props.logOutUser}
                showAuthModal={props.showAuthModal}
            />
        </div>
    )
}


