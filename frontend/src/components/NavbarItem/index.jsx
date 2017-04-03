import React, {Component, PropTypes} from "react";
import {Route, NavLink} from "react-router-dom";
import classNames from "classnames"

// export default class NavbarItem extends Component {
//     render () {
//         let className = classNames({
//             "header-menu-item": true,
//         //    "active": this.context.router.isActive(this.props.to, true)
//         });
//
//         return (
//             <li className={className}>
//                 <NavLink {...this.props}>
//                     {this.props.children}
//                 </NavLink>
//             </li>
//         );
//     }
// }

export default function NavbarItem(props) {
    return (
        <Route path={props.to} exact={props.activeOnlyWhenExact} children={({ match }) => (
            <li className={`header-menu-item ${match ? 'active' : ''}`}>
                <NavLink to={props.to}>{props.children}</NavLink>
            </li>
        )}/>
    )
}
