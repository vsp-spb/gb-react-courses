import React from 'react';
import {getPosts} from '../actions/postsAction';
import {getUsers} from '../actions/usersAction';
import {getComments} from '../actions/commentsAction';
import {connect} from 'react-redux';

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>Wellcome to the NewBlog</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        );
    }

    componentDidMount(){
        this.props.dispatch(getPosts());
        this.props.dispatch(getUsers());
        this.props.dispatch(getComments());
    }
}

export default connect()(Home)