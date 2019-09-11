import React, { Component } from 'react';
import SignupComponent from './SignupComponent.js';
import LoginComponent from './LoginComponent.js';
import './UserComponent.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

/*
 * 1. User Signup
 * 2. User Signin
 * 3. User Signout
 */

export default class UserComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
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
            <div>
                <Router>
                    <Route exact path="/" component={LoginComponent} />
                    <Route exact path="/login" component={LoginComponent} />
                    <Route exact path="/signup" component={SignupComponent} />
                </Router>
            </div>
        )
    }
}