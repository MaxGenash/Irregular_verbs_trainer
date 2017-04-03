import React, {Component} from "react";

import NavbarContainer from "../NavbarContainer";
import HeaderUserBlock from "../HeaderUserBlock";

import "./styles.css";

export default function HeaderMenu (props) {
    return (
        <div className="header-menu navbar navbar-inverse">
            <div className="header-menu-inner">
                <NavbarContainer user={props.user} />
                <HeaderUserBlock
                    user={props.user}
                    logOutUser={props.logOutUser}
                    showAuthModal={props.showAuthModal}
                />
            </div>
        </div>
    );
}
