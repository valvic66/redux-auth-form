import React, { Component } from "react";
import './index.css';
import { emailChanged, passwordChanged } from '../actions';
import { connect } from 'react-redux';

class UserForm extends Component{
    handleEmailChange = email => {
        this.props.emailChanged(email.target.value);
    };

    handlePasswordChange = password => {
        this.props.passwordChanged(password.target.value);
    };

    render() {
        console.log(this.props);
        return (
            <div className="form-wrapper">
                <form method="post">
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

                    <button type="submit">SIGN UP</button>
                </form>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        email: state.authentication.email,
        password: state.authentication.password
    }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(UserForm);
