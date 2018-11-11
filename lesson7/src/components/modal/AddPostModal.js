import React from 'react';
import {addPost} from '../../actions/postsAction';
import $ from 'jquery';
import {connect} from 'react-redux';

class AddPostModal extends React.Component{
    render(){
        return (
            <div className="modal fade" id="addPostModal" tabIndex="-1" role="dialog" aria-labelledby="addPostModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addPostModalLabel">New post</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="addTitleField">Title</label>
                                    <input type="text" className="form-control" id="addTitleField" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="addBodyField">Body</label>
                                    <textarea className="form-control" id="addBodyField" rows="8" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="addAuthorField">Author</label>
                                    <input type="text" className="form-control" id="addAuthorField" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" id="addPostBtn">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount(){
        $('#addPostBtn').on('click', () => {
            let title = $("#addTitleField").val();
            let author = $("#addAuthorField").val();
            let body = $("#addBodyField").val();
    
            this.props.dispatch(addPost(title, body, author));
    
            $("#addTitleField").val('');
            $("#addAuthorField").val('');
            $("#addBodyField").val('');
        });
    }
}

function mapStateToProps(store){
    return {
        posts: store.posts.posts
    };
}

export default connect(mapStateToProps)(AddPostModal);