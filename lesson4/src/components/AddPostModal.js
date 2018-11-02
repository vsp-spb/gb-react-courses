import React from 'react';
import ModalHeader from "./login/ModalHeader";

export default class AddPostModal extends React.Component{
    render(){
        return (
            <div className="modal fade" id={this.props.modalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <ModalHeader name="New post"/>
                        
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="titleField">Title</label>
                                    <input type="text" className="form-control" id="titleField" placeholder="Enter title"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="authorField">Author</label>
                                    <input type="text" className="form-control" id="authorField" placeholder="Enter author"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="textField">Text</label>
                                    <textarea className="form-control" id="textField" placeholder="Enter text" rows="10"/>
                                </div>
                            </form>
                        </div>
                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" id="addPostBtn">
                                Add
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}