import React from "react";
import {Link} from "react-router-dom";

export default class PostItem extends React.Component {
  render() {
    return (
      <div className="card">
        <h5 className="card-header">{this.props.title}</h5>
          <div className="card-body">
            <p className="card-text">{this.props.body}</p>
          </div>
          <div className="card-footer text-muted">
            <Link className="btn btn-secondary" to={`/posts/${this.props.id}`} role="button">
              Read more...
            </Link>
          </div>
        </div>
    );
  }
}
