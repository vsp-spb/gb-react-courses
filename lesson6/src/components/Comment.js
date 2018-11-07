import React from 'react';
import {Link} from "react-router-dom";

export default class Comment extends React.Component {
    render() {
      return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{this.props.email}</h6>
            <p className="card-text">{this.props.body}</p>
          </div>
          {
            (this.props.showFooter === 'true' && 
              <div className="card-footer text-muted">
                <Link className="btn btn-secondary" to={`/posts/${this.props.postId}`} role="button">
                  Go to post
                </Link>
              </div>  
            )
          }
        </div>
      )
    }
}
