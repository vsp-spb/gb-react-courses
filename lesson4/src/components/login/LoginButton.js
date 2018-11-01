import React from 'react';
import Octicon, { Person } from "@githubprimer/octicons-react";

export default class LoginButton extends React.Component{
    render(){
        return (
            <ul className="navbar-nav my-2 my-lg-0">
                <li className="nav-item">
                <a className="nav-link" href="#" data-toggle="modal" data-target={"#" + this.props.modalId}>
                    <Octicon icon={Person} size="medium" />
                </a>
                </li>
            </ul>
        );
    }
}