import React, { Component } from 'react'
import RegistrationDataService from "../../api/registration/RegistrationDataService";
import {Link} from "react-router-dom";
// import AuthenticationService from './AuthenticationService.js'

class RegisterComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: null,
            lastNmae:null,
            password:null,
            confirmPassword:null,
            birthday:null,
            user:{
                firstName: null,
                lastName:null,
                userName: null,
                password:null,
                confirmPassword:null,
                birthday:null,
            },
            // showSuccessMessage: false,
            registrationSuccessful: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        //console.log(this.state);
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    // handlePasswordInput(event) {
    //     if(!_.isEmpty(this.state.confirmPassword)){
    //         this.refs.passwordConfirm.isValid();
    //     }
    //     this.refs.passwordConfirm.hideError();
    //     this.setState({
    //         password: event.target.value
    //     });
    // }
    //
    // isEmpty(value) {
    //     return !_.isEmpty(value);
    // }

    formSubmit(event){
        var canProceed = this.refs.password.isValid()
            && this.refs.passwordConfirm.isValid();

        if(canProceed) {

            alert('Proceed.');
        }
        else {

        }
    }
    

    render() {
        return (
            <div>
                <h1>Register</h1>   
                <div className="container">

                    <form className="mw-75" onSubmit={this.formSubmit}>
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input
                                className="form-control"
                                id="firstName"
                                type="text"
                                validate={this.isEmpty}
                                value={this.state.firstName}
                                onChange={this.handleChange}
                                emptyMessage="First name cannot be empty"
                            />
                        </div>

                        <div className="form-group">
                            <label for="lastName">Last Name</label>
                            <input
                                className="form-control"
                                id="lastName"
                                type="text"
                                validate={this.isEmpty}
                                value={this.state.lastName}
                                onChange={this.handleChange}
                                emptyMessage="Last name cannot be empty"
                            />
                        </div>

                        <div class="form-group">
                            <label for="password">Password</label>
                            <input
                                className="form-control"
                                id="password"
                                ref="password"
                                type="password"
                                validator="true"
                                minCharacters="6"
                                requireCapitals="1"
                                requireNumbers="1"
                                value={this.state.password}
                                onChange={this.handlePasswordInput}
                                emptyMessage="Password is invalid"
                            />
                        </div>

                        <div class="form-group">
                            <label for="passwordConfirm">Confirm Password</label>
                            <input
                                className="form-control"
                                id="passwordConfirm"
                                ref="passwordConfirm"
                                type="password"
                                validate={this.handleChange}
                                value={this.state.confirmPassword}
                                onChange={this.handleChange}
                                emptyMessage="Please confirm your password"
                                errorMessage="Passwords don't match"
                            />
                        </div>

                        <div className="form-group">
                            <label for="birthday">Birthday</label>
                            <input
                                className="form-control"
                                id="birthday"
                                type="date"
                                validate={this.isEmpty}
                                value={this.state.birthday}
                                onChange={this.handleChange}
                            />
                        </div>
                      
                        
                        Gender<br/>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked/>
                                <label for="male">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="female" value="female"/>
                                <label for="female">Female</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="gender" id="other" value="other"/>                          
                                <label for="other">Other</label>
                            </div>
                        

                        <br/><br/>

                        <button type="submit" className="btn btn-primary btn-lg btn-block">Register</button>

                    </form>
                </div>
            </div>
        )
    }
}

export default RegisterComponent