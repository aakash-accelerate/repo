import React from 'react';
import $ from 'jquery';
import 'glyphicons';
import Logo from '../Images/Infosys_logo.png';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
class Navbar extends React.Component {
    componentDidMount() {
        $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');
            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-submenu .show').removeClass("show");
            });
            return false;
        });
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark  " style={{backgroundColor: 'rgb(80, 27, 129)'}}>
                <a className="navbar-brand white" href="/"><img src={Logo} alt=""></img> Navigate Your Next</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon " ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link white" href="/techstack">Current Tech Stack <span className="sr-only">(current)</span></a>
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link white dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tech Stack Details
        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Project Name</a>
                                <a className="dropdown-item" href="/">Project Type</a>
                                <a className="dropdown-item" href="/">Portfolio Name</a>
                                <a className="dropdown-item" href="/">Portfolio Anchor</a>
                                <div className="dropdown-divider"></div>
                                <li className="dropdown-submenu">
                                    <a className="dropdown-item dropdown-toggle" href="/">Tech Stack (current)</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">ALM Tool</a></li>
                                        <li><a className="dropdown-item" href="/">Languages</a></li>
                                        <li><a className="dropdown-item" href="/">Frameworks</a></li>
                                        <li><a className="dropdown-item" href="/">Unit Test Automation</a></li>
                                        <li><a className="dropdown-item" href="/">Code Profiling Tools</a></li>
                                        <li><a className="dropdown-item" href="/">Regression</a></li>
                                        <li><a className="dropdown-item" href="/">Deployment</a></li>
                                        <li><a className="dropdown-item" href="/">App Healthchecks and Monitoring</a></li>
                                    </ul>
                                </li>
                            </div>

                        </li>
                       
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li><a href="/register" class="btn btn-info" role="button">Register</a></li>&nbsp;
                        <li><a href="/login" class="btn btn-primary" role="button">Login</a></li>
                    </ul>
                </div>

            </nav>
        );
    }
}

export default Navbar;