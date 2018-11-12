import React from 'react';
import {getUserById} from '../actions/usersAction';
import {connect} from 'react-redux';

class User extends React.Component{
    render(){
        if (this.props.user === null) {
            return null;
        }

        return(
            <div>
                <h1>{this.props.user.username}</h1>
                <p>Name: {this.props.user.name}</p>
                <p>Email: {this.props.user.email}</p>
                <p>Phone: {this.props.user.phone}</p>
                <p>Address: {this.props.user.address.city}, {this.props.user.address.street}, {this.props.user.address.suite}</p>
                <p>Company: {this.props.user.company.name}</p>
                <p>Website: {this.props.user.website}</p>
            </div>
        );
    }

    componentDidMount(){
        this.props.dispatch(getUserById(this.props.match.params.id));
    }
}

function mappropsToProps(store){
    return {
        user: store.users.user
    };
}

export default connect(mappropsToProps)(User)