import React, {Component} from "react";
import "./styles.css";

export default function Footer (props) {
    return (
        <footer className="footer">
            <div className="navbar navbar-default">
                <p className="text-center footer__navbar-text">
                    <a href="https://github.com/MaxGenash/" className="navbar-link"> Max Henash</a>
                    {" "} &copy; 2017
                </p>
            </div>
        </footer>
    );
}