import React, { Component } from "react";
import './index.css';
import { emailChanged } from '../actions';
import { connect } from 'react-redux';

class UserForm extends Component{
    handleEmailChange = email => {
        this.props.emailChanged(email.target.value);
    };

    render() {
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
                        <input type="password" id="password" name="password" required />
                    </div>

                    <button type="submit">SIGN UP</button>
                </form>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        email: state.authentication.email
    }
};

export default connect(mapStateToProps, { emailChanged })(UserForm);
