import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/layout';
import CurrentChallenges from "../components/current_challenges";


class App extends React.Component {
  render() {
    return (
      <CurrentChallenges/>
    );
  }
}

export default connect()(App);
