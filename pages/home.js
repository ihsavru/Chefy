import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authorizeApp } from "../actions/login_actions";

class Home extends React.Component {
  render() {
    return (
      <p>Welcome</p>
    );
  }
}

export default (Home);
