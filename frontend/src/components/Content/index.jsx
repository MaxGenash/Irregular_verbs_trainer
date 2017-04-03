import React, {Component} from "react";
import "./styles.css";

export default function Content(props) {
    return (
        <div className="content-wrapper">
          <div className="container-fluid">
            <section className="content">
                {props.children}
            </section>
          </div>
        </div>
    );
}