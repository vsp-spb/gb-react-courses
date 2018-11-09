import React from "react";
import axios from "axios";
import PostItem from "./PostItem";

export default class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };

        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            this.setState({ posts: response.data });
        });
    }
    render() {
        if (!this.state.posts.length) {
            return null;
        }

        let posts = this.state.posts.map((post, index) => {
            return <PostItem key={index} {...post} />;
        });

        return (
            <div>
                <h1>Post list</h1>
                <div className="card-columns">
                    {posts}
                </div>
            </div>
        );
    }
}
