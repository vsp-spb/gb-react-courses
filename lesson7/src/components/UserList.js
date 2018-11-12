import React from "react";
import UserItem from "./UserItem";

export default class UserList extends React.Component {
    render() {
        if (!this.props.users.length) {
            return null;
        }

        let users = this.props.users.map((user, index) => {
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