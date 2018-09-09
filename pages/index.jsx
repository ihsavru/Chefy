import React from 'react';
import { connect } from 'react-redux';
import CurrentChallenges from "../components/current_challenges";
import Cookies from 'js-cookie';
import { setTokens, setUser } from '../actions/auth_actions';


class App extends React.Component {
  componentDidMount() {
    const tokens = {
      access_token: Cookies.get('access_token'),
      refresh_token: Cookies.get('refresh_token')
    };
    this.props.setTokens(tokens);
    this.props.setUser(tokens);
  }

  render() {
    return (
      <CurrentChallenges/>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTokens: tokens => dispatch(setTokens(tokens)),
    setUser: tokens => dispatch(setUser(tokens))
  }
};

export default connect(null, mapDispatchToProps)(App);
