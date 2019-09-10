import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Form.css';
import SignupComponent from './SignupComponent';

export default class LoginComponent extends Component {
    render() {
        return (
            <Router>
                <h1>
                    Login
                <Link to="/signup" onClick={this.props.handleClickLogin} className="link-noDecoration"> or Signup</Link>
                </h1>
                <form className="form-flex-center" onSubmit={this.props.handlePostLoginForm}>
                    <label>
                        Email Address
                </label>
                    <input type="email" placeholder="Email Address" />
                    <label>
                        Password
                </label>
                    <input type="password" placeholder="abc@123" />
                <button className="login-button">
                    Submit
                </button>
                </form>
                <Route path="/Signup" component={SignupComponent} />
            </Router>
        );
    }
}