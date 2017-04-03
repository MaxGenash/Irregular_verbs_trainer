import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default class NavLink extends Component {
  render() {
    return <Link {...this.props} activeClassName='active'/>
  }
}
