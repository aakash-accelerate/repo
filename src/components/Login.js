import React from 'react';
import axios from 'axios';
class Login extends React.Component {
    
    state = {
        form: {
            email: "",
            password: ""
        },
        formError: {
            email: "",
            password: ""
        },
        formValid: {
            email: false,
            password: false,
            buttonActive: false
        },
        errorMessage: "",
        successMessage:""
    }
    handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name
        this.setState({ form: { ...this.state.form, [name]: value } });
        this.validateField(name, value);
    }
    validateField = (fieldName, value) => {
        const formError = this.state.formError;
        const formValid = this.state.formValid;
        switch (fieldName) {
            case "email":
                if (value === "") {
                    formError.email = "Please enter email Id";
                    formValid.email = false;
                }
                else if (!value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
                    formError.email = "Enter valid Email Id";
                    formValid.email = false;
                }
                else {
                    formError.email = "";
                    formValid.email = true;
                }
                break
            case "password":
                if (value === "") {
                    formError.password = "Please enter Password";
                    formValid.password = false;
                }
                else if (value.length < 7 || value.length > 20) {
                    formError.password = "Length of Password should be between 7 to 20 inclusive";
                    formValid.password = false;
                }
                else {
                    formError.password = "";
                    formValid.password = true;
                }
                break
            default: break;
        }
        formValid.buttonActive = formValid.email && formValid.password;
        this.setState({ formError, formValid });
    }
    submitRegisterUser = (event) => {
        event.preventDefault();
        const loginUrl = 'http://localhost:3200/login';
        axios.post(loginUrl, {
                uEmail: this.state.form.email,
                uPass: this.state.form.password
        }).then((response) => {
            response = response.data;
            localStorage.setItem('email', this.state.form.email);
            localStorage.setItem('name', response.data.uName);
            this.setState(()=>({successMessage:"User successfully logged in."}))
        }).catch((error) => {
            this.setState(() => ({ errorMessage: error.error }));
        });
    }
    render(){
        const form = this.state.form;
        const formError = this.state.formError;
        return(
<React.Fragment>
                <i class="fa fa-sign-in" aria-hidden="true"></i>
                <div className="col-md-4 offset-4">
                    <form onSubmit={this.submitRegisterUser}>
                        <div className="form-group">
                            <div className="form-holder">
                                <label htmlFor="email">
                                    Email *
		  </label>
                                <input type="text" className="form-control" name="email" id='email' value={form.email} onChange={this.handleInputChange}/>
                                <span className="text-danger">{formError.email}</span>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">
                                Password
	                    	</label>
                            <input type="password" id="password" className="form-control" name="password" value={form.password} onChange={this.handleInputChange}/>
                            <span className="text-danger">{formError.password}</span>
                        </div>
                        <div className="form-group">
                            <button className="form-control btn btn-primary" disabled={!this.state.formValid.buttonActive}>Login</button>
                        </div>
                        {this.state.errorMessage && <div className='text-danger'>{this.state.errorMessage}</div>}
                        {this.state.successMessage && <div className='text-success'>{this.state.successMessage}</div>}
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;