import React, { Component, PropTypes } from 'react'

export default class AboutBox extends Component {

    render() {
        return (
            <div className=''>
                <h1 className='text-center'> Про програму </h1>
                <p className="text-center">
                    <i>
                        Тепер вчити неправильні дієслова англійської мови стало легко!
                    </i>
                </p>
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <div className="thumbnail text-center">
                            <h1>
                                <i className="fa fa-book fa-4x" />
                            </h1>
                            <div className="caption">
                                <h4> Зручний перегляд теорії </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="thumbnail text-center">
                            <h1>
                                <i className="fa fa-list-alt fa-4x" />
                            </h1>
                            <div className="caption">
                                <h4> Контроль знань через тести </h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                        <div className="thumbnail text-center">
                            <h1>
                                <i className="fa fa-line-chart fa-4x" />
                            </h1>
                            <div className="caption">
                                <h4> Контроль прогресу вивчення </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
