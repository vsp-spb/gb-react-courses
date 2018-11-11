import React from 'react';
import axios from "axios";

export default class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: null
        };

        axios.get("https://jsonplaceholder.typicode.com/users/" + this.props.match.params.id).then(response => {
            this.setState({ 
                user: response.data
            });
        });
    }
    render(){
        if (this.state.user === null) {
            return null;
        }

        return(
            <div>
                <h1>{this.state.user.username}</h1>
                <p>Name: {this.state.user.name}</p>
                <p>Email: {this.state.user.email}</p>
                <p>Phone: {this.state.user.phone}</p>
                <p>Address: {this.state.user.address.city}, {this.state.user.address.street}, {this.state.user.address.suite}</p>
                <p>Company: {this.state.user.company.name}</p>
                <p>Website: {this.state.user.website}</p>
            </div>
        );
    }
}
