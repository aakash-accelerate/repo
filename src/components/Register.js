import React from 'react';
import axios from 'axios';
class Register extends React.Component {

    state = {
        form: {
            name: "",
            email: "",
            mobile: "",
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
        const registerUrl = 'http://localhost:3200/register';
        axios.post(registerUrl, {
            uCredentials: {
                uEmail: this.state.form.email,
                uPass: this.state.form.password
            },
            uProfile: {
                uName: this.state.form.name,
                uPhone: this.state.form.mobile
            }
        }).then((response) => {
            console.log(response);
            if(response.data!==""){
            response = response.data;
           
            localStorage.setItem('email', this.state.form.email);
            localStorage.setItem('name', response.data.uName);
            this.setState(()=>({successMessage:"User successfully registered with userid: "+ response.data.userId}))}
            else{
                
            this.setState(() => ({ errorMessage: "User already registered with this emailId. Please login." }));
            }
        }).catch((error) => {
            console.log(error);
            this.setState(() => ({ errorMessage: error.error }));
        });
    }
    render() {
        const form = this.state.form;
        const formError = this.state.formError;
        console.log(this.state.successMessage);
        return (
            <React.Fragment>
                <div className=" container-fluid col-md-4 col-sm-12 card " style={{ height: "auto" }}>
                    <div className="card-body">
                        <form onSubmit={this.submitRegisterUser}>
                            <div className="form-group">
                                <div className="form-holder">
                                    <label htmlFor="name">
                                        Name *</label>
                                    <input type="text" className="form-control" value={form.name} onChange={this.handleInputChange} name='name' id='name' />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">
                                    Email *</label>
                                <input type="text" className="form-control" id="email" name='email' value={form.email} onChange={this.handleInputChange} />
                                <span className="text-danger">{formError.email}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobile">
                                    Mobile *</label>
                                <input type="text" className="form-control" id="mobile" value={form.mobile} onChange={this.handleInputChange} name='mobile' placeholder="Mobile e.g. 9811553063" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">
                                    Password *</label>
                                <input type="password" className="form-control" name='password' value={form.password} onChange={this.handleInputChange} id="password" placeholder="Atleast 7-12 characters" />
                                <span className="text-danger">{formError.password}</span>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control btn btn-primary" disabled={!this.state.formValid.buttonActive}>Register</button>
                            </div>
                            {this.state.errorMessage && <div className='text-danger'>{this.state.errorMessage}
                            </div>}
                            {this.state.successMessage && <div className='text-success'>{this.state.successMessage}
                            </div>}
                        </form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Register;