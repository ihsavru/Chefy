import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authorizeApp } from "../actions/login_actions";

class App extends React.Component {

  componentDidMount() {
    if (window.localStorage.access_token) {
      console.log("hello");
    }
  }

  render() {
    return (
      <a href="/auth/login">Login</a>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.login.token
  }
}

const mapDispatchToProps = {
  authorizeApp
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
