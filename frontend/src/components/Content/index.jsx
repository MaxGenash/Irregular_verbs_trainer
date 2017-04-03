import React, {Component} from "react";
import "./styles.css";

export default function Content(props) {
    return (
        <section className="content">
            {props.children}
        </section>
    );
}