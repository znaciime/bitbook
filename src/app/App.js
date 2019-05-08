import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import './App.css';
import Header from '../components/Header';
import Main from './Main';
import Footer from '../components/Footer';
import { Auth } from '../services/AuthService';
import Login from '../components/Login/Login';

class App extends Component {

  render() {
    if (Auth.isLoggedIn()) {
      return (
        <>
          <Header />
          <Main />
          <Footer />
        </>
      )
    }

    return (
      <Route path="/" component={Login} />
    )
  }
}

export default withRouter(App);
