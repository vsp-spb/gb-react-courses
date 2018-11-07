import React from 'react';
import {Link} from 'react-router-dom';

export default class UserItem extends React.Component {
    render() {
      return (
        <div className="card">
          <h5 className="card-header">
            <Link to={`/users/${this.props.id}`}>{this.props.username}</Link>
          </h5>
          <div className="card-body">
            <p className="card-text">Name: {this.props.name}</p>
            <p className="card-text">Email: {this.props.email}</p>
            <p className="card-text">Phone: {this.props.phone}</p>
            <p className="card-text">Address: {this.props.address.city}, {this.props.address.street}, {this.props.address.suite}</p>
          </div>
        </div>
      )
    }
}
