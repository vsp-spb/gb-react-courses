import React from 'react';
import CommentList from '../components/CommentList';
import {connect} from 'react-redux';

class Comments extends React.Component{
    render(){
        if(this.props.is_loading){
            return <div>Loading data...</div>
        }
        return <CommentList comments={this.props.comments} />;
    }
}

function mapStateToProps(store){
    return {
        comments: store.comments.comments,
        is_loading: store.comments.is_loading
    };
}

export default connect(mapStateToProps)(Comments);