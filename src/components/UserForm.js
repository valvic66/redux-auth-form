import React, { Component } from "react";
import './index.css';
import { emailChanged, passwordChanged, checkLogin } from '../actions';
import { connect } from 'react-redux';

class UserForm extends Component{
    handleEmailChange = event => {
        this.props.emailChanged(event.target.value);
    };

    handlePasswordChange = event => {
        this.props.passwordChanged(event.target.value);
    };

    handleLogIn = () => {
        const { email, password } = this.props;

        this.props.checkLogin({ email, password });
    };

    render() {
        console.log(this.props);
        return (
            <div className="form-wrapper">
                <h3 className="form-name">Registration form</h3>

                <div className="user-field">
                    <label htmlFor="email">Email</label>
                    <input
                        autoComplete="false"
                        type="email"
                        id="email"
                        name="email"
                        required
                        onChange={this.handleEmailChange}
                        value={this.props.email}
                    />
                </div>

                <div className="user-field">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required
                        onChange={this.handlePasswordChange}
                        value={this.props.password}
                    />
                </div>

                <button onClick={this.handleLogIn}>LOG IN</button>

                <p>{this.props.status}</p>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        email: state.authentication.email,
        password: state.authentication.password,
        status: state.authentication.status
    }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, checkLogin })(UserForm);
