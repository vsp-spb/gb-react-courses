import React from 'react';
import {editPost} from '../../actions/postsAction';
import $ from 'jquery';
import {connect} from 'react-redux';

class EditPostModal extends React.Component{
    render(){
        return (
            <div className="modal fade" id="editPostModal" tabIndex="-1" role="dialog" aria-labelledby="editPostModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editPostModalLabel">Edit post</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <input type="hidden" id="editIdField" />
                                <div className="form-group">
                                    <label htmlFor="editTitleField">Title</label>
                                    <input type="text" className="form-control" id="editTitleField" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="editBodyField">Body</label>
                                    <textarea className="form-control" id="editBodyField" rows="8" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" id="editPostBtn">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount(){
        $('#editPostBtn').on('click', () => {
            let postId = $("#editIdField").val();
            let title = $("#editTitleField").val();
            let body = $("#editBodyField").val();
    
            this.props.dispatch(editPost(postId, title, body));
    
            $("#editIdField").val('');
            $("#editTitleField").val('');
            $("#editBodyField").val('');
        });
    }
}

export default connect()(EditPostModal);