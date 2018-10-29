import React from 'react';

export default class ModalHeader extends React.Component{
    render(){
        return (
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                    {this.props.name} form
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}