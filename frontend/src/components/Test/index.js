import React, { Component, PropTypes } from 'react'
import classNames from "classnames"

import TestForm from "../TestForm"
import TestResults from "../TestResults"
import "./style.css"

function TestBody(props) {
    if(props.testIsFinished)
        return (
            <TestResults
                goBackToTheory={props.goBackToTheory}
                testResults={props.testResults}
            />
        );
    else
        return (
            <TestForm
                goBackToTheory={props.goBackToTheory}
                testData={props.testData}
                onTestFormSubmit={props.onTestFormSubmit}
            />
        );
}

export default class Test extends Component {
    componentDidMount() {
        //this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
    }

    // routerWillLeave = () => {
    //     let answer = window.confirm('Ви впевнені?');
    //     if (!answer) return false
    // };

    render() {
        let componentClasssName = classNames({
            "hidden": !this.props.show,
            "study-box-test": true
        });

        return (
            <div className={componentClasssName}>
                <h1 className="text-center"> Тест </h1>
                <TestBody {...this.props} />
            </div>
        );
    }
}

// Test.contextTypes = {
//     router: PropTypes.object.isRequired
// };
