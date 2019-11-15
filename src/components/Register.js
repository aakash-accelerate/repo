import React from 'react';

class Register extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className=" container-fluid col-md-4 col-sm-12 card " style={{height:"auto"}}>
                    <div className="card-body">
                    <form>
                        <div className="form-group">
                            <div className="form-holder">
                                <label htmlFor="name">
                                    Name *
		  </label>
                                <input type="text" className="form-control" id='name' />
                            </div>

                        </div>
                        <div className="form-group">
                            <label htmlFor="email">
                                Email
	                    	</label>
                            <input type="text" className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">
                                Address *
	                    	</label>
                            <input type="text" className="form-control" placeholder="Street address" />
                            <input type="text" className="form-control" placeholder="Apartment, suite, unit etc. (optional)" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">
                                Town / City *
	                    	</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">
                                State *
	                    	</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <button className="form-control btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Register;