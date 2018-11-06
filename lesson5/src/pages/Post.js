import React from 'react';
import $ from 'jquery'; 
import axios from "axios";

export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            post: {},
            author: {}
        };

        axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.params.id).then(postResponse => {
            axios.get("https://jsonplaceholder.typicode.com/users/" + postResponse.data.userId).then(userResponse => {
                this.setState({ 
                    post: postResponse.data,
                    author: userResponse.data
                });
            });
        });
    }
    render(){
        if ($.isEmptyObject(this.state.post) || $.isEmptyObject(this.state.author)) {
            return null;
        }

        return(
            <div>
                <h1>{this.state.post.title}</h1>
                <p className="font-italic">By {this.state.author.name}</p>
                <p>{this.state.post.body}</p>
            </div>
        );
    }
}
