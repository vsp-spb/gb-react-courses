import React from "react";
import ModalHeader from "./ModalHeader";
import LoginForm from "./LoginForm";
import ModalFooter from "./ModalFooter";

export default class LoginModal extends React.Component {
  render() {
    return (
      <div className="modal fade" id={this.props.modalId} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <ModalHeader name={this.props.name}/>
            <LoginForm/>
            <ModalFooter name={this.props.name}/>
          </div>
        </div>
      </div>
    );
  }
}
