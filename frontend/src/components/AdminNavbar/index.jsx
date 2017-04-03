import React, {Component} from "react";
import NavbarItem from "../NavbarItem";
import "./styles.css";

export default function AdminNavbar(props) {
    return (
        <ul className="nav navbar-nav header-menu-navbar">
            <NavbarItem to='/admin/users'>
                Користувачі
            </NavbarItem>
            <NavbarItem to='/admin/ctrl-theory'>
                Контроль теорії
            </NavbarItem>
        </ul>
    );
}
