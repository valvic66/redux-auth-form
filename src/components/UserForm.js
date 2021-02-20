import React, { Component } from "react";
import './index.css';
import { emailChanged, passwordChanged, checkLogin } from '../actions';
import { connect } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";
import classnames from 'classnames';
import { Message } from './Message';

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
        // destructuring properties from state
        const { statusText, isStatusError, loading } = this.props;

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

                {statusText && <Message message={statusText} isMessageError={isStatusError} />}

                {loading ? (
                    <div>
                        <ClipLoader loading={loading} size={30} />
                    </div>
                ):(
                   <button onClick={this.handleLogIn}>Log In</button>
                )}
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        email: state.authentication.email,
        password: state.authentication.password,
        userData: state.authentication.userData,
        loading: state.authentication.loading,
        statusText: state.authentication.statusText,
        isStatusError: state.authentication.isStatusError
    }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, checkLogin })(UserForm);
