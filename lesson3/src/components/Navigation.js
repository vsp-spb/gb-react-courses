import React from "react";
import LoginButton from "./login/LoginButton";

export default class Navigation extends React.Component {
  render() {
    let items = this.props.items.map((item, index) => {
      return (
        <li className="nav-item" key={index}>
          <a className="nav-link" href={item.href}>
            {item.title}
          </a>
        </li>
      );
    });

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          {this.props.blogName}
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">{items}</ul>
          <LoginButton modalId={this.props.modalId}/>
        </div>
      </nav>
    );
  }
}
