import React, { Component, PropTypes } from 'react'
import classNames from "classnames"

export default class Test extends Component {
    state = {

    };

    componentDidMount() {
        //this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
    }

    handleSubmit = (e) => {
        e.preventDefault();
    };

    // routerWillLeave = () => {
    //     let answer = window.confirm('Ви впевнені?');
    //     if (!answer) return false
    // };

    render() {
        let componentClasssName = classNames({"hidden": !this.props.show});

        return (
            <div className={componentClasssName}>
                <h1>Test</h1>
                <button
                    type="button"
                    onClick={this.props.goBackToTheory}
                    className="btn btn-default"
                >
                    Повернутися до теорії
                </button>
            </div>
        );
    }
}

// Test.contextTypes = {
//     router: PropTypes.object.isRequired
// };
