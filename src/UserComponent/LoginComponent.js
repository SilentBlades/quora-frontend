import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Form.css';
import SignupComponent from './SignupComponent';
import Axios from 'axios';

export default class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showLabel: false,
            errorMessage: ''
        }

        this.handlePostLoginForm = this.handlePostLoginForm.bind(this);
    }

    handlePostLoginForm(event) {
        const data = new FormData(event.target);
        var email = data.get('email');
        var password = data.get('password');

        const encodedString = new Buffer(email + ':' + password).toString('base64');
        const encodedAuthenticationString = "Basic " + encodedString;

        Axios({
            url:'http://localhost:8080/api/user/signin',
            method: 'post',
            headers: {
                'authorization': encodedAuthenticationString,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            this.setState({
                showLabel: false,
            })
            console.log(response)
        })
        .catch(err => {
            console.log(err.response);
            if(err.response.status > 300 && err.response.status < 500) {
                this.setState({
                    showLabel: true,
                    errorMessage: err.response.data.message
                })
            }
        });

        event.preventDefault();
    }

    render() {
        return (
            <Router>
                <h1>
                    Login
                <Link to="/signup" onClick={this.props.handleClickLogin} className="link-noDecoration"> or Signup</Link>
                </h1>
                <form className="form-flex-center" onSubmit={this.handlePostLoginForm}>
                    <label>
                        Email Address
                </label>
                <input type="email" name="email" placeholder="Email Address" required />
                <label>
                        Password
                </label>
                    <input type="password" name="password" placeholder="abc@123" required />
                <button className="login-button">
                    Submit
                </button>
                <label className="errorMessage" style={{display: this.state.showLabel ? 'block' : 'none'}}>
                    {this.state.errorMessage}
                </label>
                </form>
                <Route path="/Signup" component={SignupComponent} />
            </Router>
        );
    }
}