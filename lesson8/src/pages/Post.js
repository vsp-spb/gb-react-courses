import React from 'react';
import Comment from "../components/Comment";
import {getPostById} from '../actions/postsAction';
import {getCommentsByPost} from '../actions/commentsAction';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Post extends React.Component{
    render(){
        let commentsBlock = null;
        if(this.props.postComments !== undefined && this.props.postComments.length > 0){
            let comments = this.props.postComments.map((comment, index) => {
                return <Comment key={index} showFooter='false' {...comment} />;
            })
            commentsBlock = <div><h3>Comments</h3>{comments}</div>;
        }

        if(this.props.post === null){
            return null;
        }

        return(
            <div>
                <h1>{this.props.post.title}</h1>
                <p className="font-italic">
                    <Link to={`/users/${this.props.post.userId}`}>Go to author</Link>
                </p>
                <p>{this.props.post.body}</p>
                {commentsBlock}
            </div>
        );
    }

    componentDidMount(){
        this.props.dispatch(getPostById(this.props.match.params.id));

        this.props.dispatch(getCommentsByPost(this.props.match.params.id));
    }
}

function mapStateToProps(store){
    return {
        post: store.posts.openedPost,
        postComments: store.comments.postComments
    };
}

export default connect(mapStateToProps)(Post)