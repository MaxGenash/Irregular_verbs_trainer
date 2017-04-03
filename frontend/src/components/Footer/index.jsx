import React, {Component} from "react";
import "./styles.css";

export default function Footer (props) {
    return (
        <footer className="footer">
            <div className="navbar navbar-default">
                <p className="text-center footer__navbar-text">
                    <a href="#" className="navbar-link"> Генаш Максим</a>,
                    <a href="#" className="navbar-link"> Андрієвич Володимир</a>,
                    <a href="#" className="navbar-link"> Шевченко Олександр</a>
                    {" "} &copy; 2017
                </p>
            </div>
        </footer>
    );
}