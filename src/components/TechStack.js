import React from 'react';

class TechStack extends React.Component {
    render() {
        return (
            <React.Fragment>
               <div class="container py-5">
    <div class="row">
        <div class="col-md-10 mx-auto">
            <form>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="projectname">Project name</label>
                        <input type="text" class="form-control" id="projectname" placeholder="Project name"/>
                    </div>
                    <div class="col-sm-6">
                        <label for="alm">ALM Tool</label>
                        <input type="text" class="form-control" id="alm" placeholder="ALM Tool"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="projectcode">Project code</label>
                        <input type="text" class="form-control" id="projectcode" placeholder="Project Code"/>
                    </div>
                    <div class="col-sm-6">
                        <label for="languages">Languages</label>
                        <input type="text" class="form-control" id="languages" placeholder="Languages"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="projecttype">Project Type</label>
                        <input type="text" class="form-control" id="projecttype" placeholder="Project Type"/>
                    </div>
                    <div class="col-sm-3">
                        <label for="unittest">Unit Test Automation Framework</label>
                        <input type="text" class="form-control" id="unittest" placeholder="Unit Test Framework"/>
                    </div>
                    <div class="col-sm-3">
                        <label for="regression">Regression automation</label>
                        <input type="text" class="form-control" id="regression" placeholder="Regression Automation"/>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-6">
                        <label for="portfolioanchor">Portfolio Anchor</label>
                        <input type="number" class="form-control" id="portfolioanchor" placeholder="Portfolio anchor"/>
                    </div>
                    <div class="col-sm-6">
                        <label for="deployment">Deployment</label>
                        <input type="text" class="form-control" id="deployment" placeholder="Deployment"/>
                    </div>
                </div>
                <button type="button" class="btn btn-primary px-4 float-right">Save</button>
            </form>
        </div>
    </div>
</div>
            </React.Fragment>
        );
    }
}

export default TechStack;