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
                <h1>{this.props.user.name}</h1>
                <p>Email: {this.props.user.email}</p>
                <p>Phone: {this.props.user.phone}</p>
                <p>Address: {this.props.user.address}</p>
                <p>Company: {this.props.user.company}</p>
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