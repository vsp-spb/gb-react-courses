import React from 'react';
import axios from "axios";
import Comment from "../components/Comment";
import {getPostById} from '../actions/postsAction';
import {connect} from 'react-redux';

class Post extends React.Component{
    /*constructor(props){
        super(props);
        this.state = {
            post: null,
            author: null,
            comments: []
        };

        axios.all([
            axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id),
            axios.get("https://jsonplaceholder.typicode.com/posts/" + this.props.match.params.id + "/comments")
        ])
        .then(axios.spread((postResponse, commentResponse) => {
            axios.get("https://jsonplaceholder.typicode.com/users/" + postResponse.data.userId).then(userResponse => {
                this.setState({ 
                    post: postResponse.data,
                    author: userResponse.data,
                    comments: commentResponse.data
                });
            });
        }));

    }*/
    render(){
        /*if (this.state.post === null || this.state.author === null) {
            return null;
        }

        let comments = this.state.comments.map((comment, index) => {
            return <Comment key={index} showFooter='false' {...comment} />;
        });*/

        if(this.props.post === null){
            return null;
        }

        return(
            <div>
                <h1>{this.props.post.title}</h1>
                <p>{this.props.post.body}</p>
                <h3>Comments</h3>
            </div>
            /*<div>
                <h1>{this.state.post.title}</h1>
                <p className="font-italic">By {this.state.author.name}</p>
                <p>{this.state.post.body}</p>
                <h3>Comments</h3>
                {comments}
            </div>*/
        );
    }

    componentDidMount(){
        this.props.dispatch(getPostById(this.props.match.params.id));
    }
}

function mapStateToProps(store){
    return {
        post: store.posts.openedPost
    };
}

export default connect(mapStateToProps)(Post)
