import React, { Component } from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'

import Users from '../Users'
import CtrlTheory from '../CtrlTheory'

export default class AdminBox extends Component {
    componentDidMount() {
        // if(!this.props.user || !this.props.user.isAdmin)
        //     Зробити редірект на головну
    }

    render() {
        return (
            <div className=''>
                <h1> AdminBox </h1>
                <Redirect exact from="/admin" to='/admin/ctrl-theory' />
                <Route path="/admin/users" component={Users} />
                <Route path="/admin/ctrl-theory" component={CtrlTheory} />
            </div>
        )
    }
}
