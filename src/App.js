import React, { Component } from 'react';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/popper.js/dist/umd/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import Register from './components/Register';
import TechStack from './components/TechStack';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from './components/Login';
class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dashboard"></Redirect>} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/techstack" component={TechStack} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
      </Router>


    );
  }
}
export default App;