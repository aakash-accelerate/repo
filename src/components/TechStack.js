import React from 'react';

class TechStack extends React.Component {
    render() {
        return (
            <React.Fragment>
             <div class="container-fluid">
  
  <div className="row">
  <div className="col-xs-12 col-sm-12 col-md-6">
    <div class="card">
    <h1 class="card-header">Project Registration Form</h1>
    <form >
      <div class="form-group">
        <label>Project Name</label>
        <input type="text" class="form-control"  placeholder="Project name"/>
     
      </div>
      <div class="form-group">
        <label>Project Code</label>
        <input type="text" class="form-control"  placeholder="Project Code"/>
      </div>
      <div class="form-group">
        <label>Project Type</label>
            <select id="inputState" class="form-control" >
              <option>Development</option>
              <option>Maintainance</option>
              <option>Support</option>
            </select>
      </div>
      <div class="form-group">
        <label>Project RunMode</label>
        <select id="inputState" class="form-control" >
            <option>Agile</option>
            <option>Waterfall</option>
          </select>
      </div>
      <div class="form-group">
        <label>Portfolio Anchor</label>
        <input type="text" class="form-control"  placeholder="Portfolio Anchor"/>
      </div>
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
    </div>
  <br/>
  </div>





  <div class="col-xs-12 col-sm-12 col-md-6 card">
    <h1>Tech Registration Form</h1>
    <form >
      <div class="form-group">
        <label>ALM Tool</label>
        <input type="text" class="form-control"  placeholder="ALM Tool"/>
      </div>
      <div class="form-group">
        <label>Unit Test Framework</label>
        <input type="text" class="form-control"  placeholder="Unit Test Framework"/>
      </div>
      <div class="form-group">
        <label>Code Profiling Tool</label>
        <input type="text" class="form-control"  placeholder="Code Profiliong Tool"/>
      </div>
      <div class="form-group">
        <label>Regression Automation</label>
        <input type="text" class="form-control"  placeholder="Regression Automation"/>
      </div>
      <div class="form-group">
        <label>Deployment</label>
        <input type="text" class="form-control"  placeholder="Deployment"/>
      </div>
      <div class="form-group">
        <label>Application Health Check and Monitoring</label>
        <input type="text" class="form-control"  placeholder="Application Health Check and Monitoring"/>
      </div>
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
  <br/>
  </div>
  </div>
  </div>
            </React.Fragment>
        );
    }
}

export default TechStack;