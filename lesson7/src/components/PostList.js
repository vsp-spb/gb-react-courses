import React from "react";
import PostItem from "./PostItem";
import AddPostModal from './modal/AddPostModal';
import EditPostModal from './modal/EditPostModal';

export default class PostList extends React.Component {
    render() {
        if (!this.props.posts.length) {
            return null;
        }

        let posts = this.props.posts.map((post, index) => {
            return <PostItem key={index} {...post} />;
        });

        return (
            <div>
                <h1>Post list</h1>
                <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#addPostModal">Add post</a>
                <hr/>
                <div className="card-columns">
                    {posts}
                </div>
                <AddPostModal />
                <EditPostModal />
            </div>
        );
    }
}
