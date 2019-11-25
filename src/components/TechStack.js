import React from 'react';

class TechStack extends React.Component {
    render() {
        return (
            <React.Fragment>
             <div class="container-fluid">
  
 
 
  <form className='form'>
  <div className="row">
    <div class="card col-md-6 ">
    <h5 class="card-header">Project Details</h5>
    
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
      <br/>
      <div className='form-group'>
  <button class="btn btn-primary form-control" type="submit">Submit</button>
  </div>
  
    </div>
  






  <div class="card col-md-6 ">
  <h5 class="card-header">Technical Details</h5>
    
      <div class="form-group">
        <label>ALM Tool</label>
        <select id="alm" class="form-control" >
            <option>Jira</option>
            <option>Rally</option>
            <option>TFS</option>
            <option>Any other tool</option>
          </select>
      </div>
      <div class="form-group">
        <label>Unit Testing</label>
        <select id="unit" class="form-control" >
            <option>Automated</option>
            <option>Manual</option>
           
          </select>
      </div>
      <div class="form-group">
        <label>Code Profiling Tool</label>
        <input type="text" class="form-control"  placeholder="Code Profiliong Tool"/>
      </div>
      <div class="form-group">
        <label>Regression Automation</label>
        <select id="regression" class="form-control" >
            <option>Automated</option>
            <option>Manual</option>
           
          </select>
      </div>
      <div class="form-group">
        <label>Deployment</label>
        <select id="deployment" class="form-control" >
            <option>Automated</option>
            <option>Manual</option>
           
          </select>
      </div>
      <div class="form-group">
        <label>Application Health Check and Monitoring</label>
        <input type="text" class="form-control"  placeholder="Application Health Check and Monitoring"/>
      </div>
      
  
  <br/>
 
  
  </div>
  
  </div>
  
  </form>
  </div>
  
    </React.Fragment>
        );
    }
}

export default TechStack;