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

        this.handlePostSignupForm = this.handlePostSignupForm.bind(this);
        this.handlePostLoginForm = this.handlePostLoginForm.bind(this);
        this.handleClickSignup = this.handleClickSignup.bind(this);
        this.handleClickLogin = this.handleClickLogin.bind(this);
    }

    handlePostSignupForm(event) {
        const data = new FormData(event.target);
        console.log(data.get('first_name'));
        event.preventDefault();
    }

    handlePostLoginForm(event) {
        const data = new FormData(event.target);
        console.log(data.get('email'));
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