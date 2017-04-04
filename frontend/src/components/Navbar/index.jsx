import React, {Component} from "react";
import NavbarItem from "../NavbarItem";
import "./styles.css";

export default function Navbar(props) {
    return (
        <ul className="nav navbar-nav header-menu-navbar">
            <NavbarItem to='/about'>
                Про програму
            </NavbarItem>
            {
                props.user && props.user.isAuthenticated && (
                    [
                       /* <NavbarItem to='/statistics' key="1">
                            Статистика
                        </NavbarItem>,*/
                        <NavbarItem to='/study' key="2">
                            Навчання
                        </NavbarItem>
                    ]
                )
            }
            <NavbarItem to='/help'>
                <i className="fa fa-question-circle" />
                Допомога
            </NavbarItem>
        </ul>
    );
}
