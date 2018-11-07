import React from "react";
import {Link} from "react-router";

export default class FooterLinks extends React.Component {
  render() {
    let items = this.props.content.links.map((item, index) => {
      return (
        <li key={index}>
          <Link to={item.href}>{item.title}</Link>
        </li>
      );
    });

    return (
      <div className="col-md-3 mb-md-0 mb-3">
        <h5 className="text-uppercase">{this.props.content.title}</h5>
        <ul className="list-unstyled">{items}</ul>
      </div>
    );
  }
}
