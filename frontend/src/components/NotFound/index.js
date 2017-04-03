import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
    render() {
        return (
            <div className='text-center'>
                <br/>
                <h3>Строінку не знайдено :(</h3>
                <p>
                    Повернутися на <Link to='/'>головну</Link>?
                </p>
                <br/>
            </div>
        )
    }
}
