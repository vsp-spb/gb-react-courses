import React from 'react';
import {Link} from 'react-router';

export default class MenuItem extends React.Component{
    render(){
        let liClass = "nav-item";

        if(this.props.active){
            liClass += " active";
        }
        
        return (
            <li className={liClass}>
                <Link className="nav-link" to={this.props.href}>{this.props.children}</Link>
            </li>
        );
    }
}