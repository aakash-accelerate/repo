import React from 'react';
import $ from 'jquery';
import 'glyphicons';
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
            <nav className="navbar navbar-expand-lg white myColor">
                <a className="navbar-brand" href="/"><img src='/assets/Infosys_logo.svg.png' alt=""></img></a>
                <a className="nav-link white" href="/">Navigate Your Next</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="white">=</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link white" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link white" href="/">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link white dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Menu
        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/">Sub-menu 1</a>
                                <a className="dropdown-item" href="/">Sub-menu 2</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/">Another menu</a>
                            </div>

                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link white dropdown-toggle" href="/" data-toggle="dropdown">Tutorials
    <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">HTML</a></li>
                                <li><a className="dropdown-item" href="/">CSS</a></li>
                                <li className="dropdown-submenu">
                                    <a className="dropdown-item dropdown-toggle" href="/">New dropdown</a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/">2nd level dropdown</a></li>
                                        <li><a className="dropdown-item" href="/">2nd level dropdown</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>

            </nav>
        );
    }
}

export default Navbar;