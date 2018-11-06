import React from 'react';

export default class LoginForm extends React.Component{
    render(){
        return (
            <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="loginField">Login</label>
                        <input type="text" className="form-control" id="loginField" placeholder="Enter login"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordField">Password</label>
                        <input type="password" className="form-control" id="passwordField" placeholder="Enter password"/>
                    </div>
                </form>
            </div>
        );
    }
}
