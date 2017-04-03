import React, { Component } from 'react'

import Navbar from "../Navbar";
import AdminNavbar from "../AdminNavbar"

export default function NavbarContainer(props) {
    if(props.user && props.user.isAdmin)
        return <AdminNavbar {...props} />;
    else
        return <Navbar {...props} />;
}