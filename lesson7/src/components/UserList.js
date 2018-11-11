import React from "react";
import axios from "axios";
import UserItem from "./UserItem";

export default class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };

        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            this.setState({ users: response.data });
        });
    }
    render() {
        if (!this.state.users.length) {
            return null;
        }

        let users = this.state.users.map((user, index) => {
            return <UserItem key={index} {...user} />;
        });

        return (
            <div>
                <h1>User list</h1>
                <div className="card-columns">
                    {users}
                </div>
            </div>
        );
    }
}
