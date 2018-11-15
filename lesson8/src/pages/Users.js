import React from "react";
import UserList from "../components/UserList";
import {connect} from 'react-redux';
import {getUsers} from '../actions/usersAction';

class Users extends React.Component {
    render() {
        if(this.props.is_loading){
            return <div>Loading data...</div>
        }
        return <UserList users={this.props.users} />;
    }

    componentDidMount(){
        this.props.dispatch(getUsers());
    }
}

function mapStateToProps(store){
    return {
        users: store.users.users,
        is_loading: store.users.is_loading
    };
}

export default connect(mapStateToProps)(Users);