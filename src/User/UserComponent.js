import React, {Component} from 'react';
import './UserComponent.css';

/*
 * 1. User Signup
 * 2. User Signin
 * 3. User Signout
 */

export default class UserComponent extends Component {
    constructor(props) {
        super(props)
    }

    countryChangeHandler = value => {
        this.setState({value});
    }

    render() {
        return(
            <div className="div-center">
                <h1>
                    Signup
                </h1>
                <form className="form-flex-center">
                    <label>
                        First Name
                    </label>
                    <input type="text" placeholder="First Name" />
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
                        <option value="india" selected="selected">
                            India
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
                </form>
            </div>
        )
    }
}