import React, { Component } from 'react'
import classNames from "classnames"

export default class Theory extends Component {
    render() {
        let componentClasssName = classNames({"hidden": !this.props.show});

        return (
            <div className={componentClasssName}>
                <h1> Theory </h1>
                <button
                    type="button"
                    onClick={this.props.startTest}
                    className="btn btn-default"
                >
                    Розпочати тест
                </button>
            </div>
        );
    }
}
