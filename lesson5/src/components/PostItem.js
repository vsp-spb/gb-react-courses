import React from "react";
import {Link} from "react-router";

export default class PostItem extends React.Component {
  render() {
    let url = "/posts/" + this.props.id;
    return (
      <div className="card">
        <h5 className="card-header">{this.props.title}</h5>
          <div className="card-body">
            <p className="card-text">{this.props.body}</p>
          </div>
          <div className="card-footer text-muted">
            <Link className="btn btn-secondary" to={url} role="button">
              Read more...
            </Link>
          </div>
        </div>
    );
  }
}
