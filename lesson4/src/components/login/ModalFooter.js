import React from 'react';

export default class ModalHeader extends React.Component{
    render(){
        return (
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">
                    {this.props.name}
                </button>
            </div>
        );
    }
}