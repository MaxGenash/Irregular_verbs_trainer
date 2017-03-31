import React, { Component, PropTypes } from 'react'

export default class Home extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e) {
    e.preventDefault()
    const value = e.target.elements[0].value.toLowerCase()
    this.context.router.push(`/genre/${value}`)
  }
  componentDidMount() {
    this.context.router.setRouteLeaveHook(this.props.route, this.routerWillLeave)
  }
  routerWillLeave() {
    let answer = window.confirm('Вы уверены?')
    if (!answer) return false
  }
  render() {
    return (
      <div className=''>
        <h3 className=''>Раздел /</h3>
        <form className='form-inline' onSubmit={this.handleSubmit}>
          <input className="form-control" type='text' placeholder='genreName'/>
          <button className="btn btn-primary" type='submit'>Перейти</button>
        </form>
      </div>
    )
  }
}

Home.contextTypes = {
  router: PropTypes.object.isRequired
}
