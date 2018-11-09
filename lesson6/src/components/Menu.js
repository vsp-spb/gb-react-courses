import React from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">{this.props.blogName}</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        {this.props.children}
                    </ul>
                </div>
            </nav>
        );
    }
}