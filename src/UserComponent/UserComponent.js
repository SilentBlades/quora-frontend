import React, { Component } from 'react';
import SignupComponent from './SignupComponent.js';
import LoginComponent from './LoginComponent.js';
import './UserComponent.css';

/*
 * 1. User Signup
 * 2. User Signin
 * 3. User Signout
 */

export default class UserComponent extends Component {

    constructor(props) {
        super(props);

        this.state={
            login: true
        }

        this.handleClickSignup = this.handleClickSignup.bind(this);
        this.handleClickLogin = this.handleClickLogin.bind(this);
    }

    handleClickLogin() {
        this.setState({
            login: false
        });
    }

    handleClickSignup() {
        this.setState({
            login: true
        });
    }

    render() {
        return (
            <div className="div-center">
                {
                    (this.state.login) ? (<LoginComponent handlePostLoginForm={this.handlePostLoginForm} handleClickLogin={this.handleClickLogin} />) 
                                       : (<SignupComponent handlePostSignupForm={this.handlePostSignupForm} handleClickSignup={this.handleClickSignup} />)
                }
            </div>
        )
    }
}