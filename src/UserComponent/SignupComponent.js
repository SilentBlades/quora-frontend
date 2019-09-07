import React, { Component } from 'react';
import './Signup.css';

/*
 * 1. User Signup
 * 2. User Signin
 * 3. User Signout
 */

export default class SignupComponent extends Component {

    constructor(props) {
        super(props);

        this.handlePostSignupForm = this.handlePostSignupForm.bind(this);
    }

    handlePostSignupForm(event) {
        const data = new FormData(event.target);
        console.log(data.get('first_name'));
        event.preventDefault();
    }

    render() {
        return (
            <div className="div-center">
                <h1>
                    Signup
                </h1>
                <SignupForm handlePostSignupForm={this.handlePostSignupForm}/>
            </div>
        )
    }
}

function SignupForm(props) {

    return (
        <form className="form-flex-center" onSubmit={props.handlePostSignupForm}>
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
            <button>
                Submit
            </button>
        </form>
    );
}