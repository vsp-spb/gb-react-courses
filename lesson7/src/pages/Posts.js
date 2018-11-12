import React from 'react';
import PostList from '../components/PostList';
import {connect} from 'react-redux';

class Posts extends React.Component{
    render(){
        if(this.props.is_loading){
            return <div>Loading data...</div>
        }
        return <PostList posts={this.props.posts}/>;
    }
}

function mapStateToProps(store){
    return {
        posts: store.posts.posts,
        is_loading: store.posts.is_loading
    };
}

export default connect(mapStateToProps)(Posts);