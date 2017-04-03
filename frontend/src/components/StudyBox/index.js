import React, { Component, PropTypes } from 'react'

import Theory from '../Theory'
import Test from '../Test'

export default class StudyBox extends Component {
    state = {
        showTest: false
        //Тут зберігати стан блоків теорії і тесту
    };

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         showTest: false
    //         //Тут зберігати стан блоків теорії і тесту
    //     };
    // }

    componentDidMount() {

    }

    startTest = () => this.setState({showTest: true});

    goBackToTheory = () => this.setState({showTest: false});

    render() {
        return (
            <div className=''>
                <h1 className=''> StudyBox </h1>
                <Theory
                    show={!this.state.showTest}
                    startTest={this.startTest}
                />
                <Test
                    show={this.state.showTest}
                    goBackToTheory={this.goBackToTheory}
                />
            </div>
        )
    }
}
