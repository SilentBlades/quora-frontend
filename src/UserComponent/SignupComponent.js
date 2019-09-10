import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Form.css';
import LoginComponent from './LoginComponent';

export default class SignupComponent extends Component {
    render() {
        return (
            <Router>
                <h1>
                    Signup
                <Link to="/login" onClick={this.props.handleClickSignup} className="link-noDecoration"> or Login</Link>
                </h1>
                <form className="form-flex-center" onSubmit={this.props.handlePostSignupForm}>
                    <label>
                        First Name
                </label>
                    <input type="text" name="first_name" placeholder="First Name" />
                    <label>
                        Last Name
                </label>
                    <input type="text" placeholder="Last Name" />
                    <label>
                        User Name
                </label>
                    <input type="text" placeholder="User Name" />
                    <label>
                        Email Address
                </label>
                    <input type="email" placeholder="Email Address" />
                    <label>
                        Password
                </label>
                    <input type="password" placeholder="abc@123" />
                    <label>
                        Country
                </label>
                    <select>
                        <option value="india" defaultValue="selected">
                            India
                    </option>
                        <option value="usa">
                            USA
                    </option>
                        <option value="canada">
                            Canada
                    </option>
                        <option value="england">
                            England
                    </option>
                    </select>
                    <label>
                        About Me
                </label>
                    <textarea rows="4" cols="50" />
                    <label>
                        Contact Number
                </label>
                <input type="tel" placeholder="000-000-0000" />
                <button className="signup-button">
                    Submit
                </button>
                </form>
                <Route path="/login" component={LoginComponent} />
            </Router>
        );
    }
}