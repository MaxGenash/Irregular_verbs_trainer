import React, {Component} from "react";

import Header from "../Header";
import HeaderMenu from "../HeaderMenu";
import Content from "../Content";
import Footer from "../Footer";

import "./style.css"

export default function MainLayout(props) {
    const children = React.Children.map(props.children, (child) => {
        return React.cloneElement(child, props);
    });

    return <div className="row main-layout">
        <Header />
        <HeaderMenu
            user={props.user}
            logOutUser={props.logOutUser}
            showAuthModal={props.showAuthModal}
        />
        <Content>
            {children}
        </Content>
        <Footer />
    </div>
}
