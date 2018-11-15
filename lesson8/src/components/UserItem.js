import React from 'react';
import {Link} from 'react-router-dom';

export default class UserItem extends React.Component {
    render() {
      return (
        <div className="card">
          <h5 className="card-header">
            <Link to={`/users/${this.props.id}`}>{this.props.name}</Link>
          </h5>
          <div className="card-body">
            <p className="card-text">Email: {this.props.email}</p>
            <p className="card-text">Phone: {this.props.phone}</p>
            <p className="card-text">Address: {this.props.address}</p>
          </div>
        </div>
      )
    }
}
