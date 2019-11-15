import React from 'react';

class Login extends React.Component {
    render(){
        return(
<React.Fragment>
                <i class="fa fa-sign-in" aria-hidden="true"></i>
                <div className="col-md-4 offset-4">
                    <form>
                        <div className="form-group">
                            <div className="form-holder">
                                <label htmlFor="email">
                                    Email *
		  </label>
                                <input type="text" className="form-control" id='email' />
                            </div>

                        </div>
                        <div className="form-group">
                            <label htmlFor="password">
                                Password
	                    	</label>
                            <input type="password" id="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <button className="form-control btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Login;