import React from 'react';
import Auth from "./auth";
import PastChallenges from "./past_challenges";
import CurrentChallenges from "./current_challenges";
import Navbar from "./navbar.js";
import { connect } from 'react-redux';
import { setTokens, setUser } from "../actions/auth_actions";

class Main extends React.Component {
  componentDidMount() {
    const tokens = {
      access_token: window.localStorage.access_token,
      refresh_token: window.localStorage.refresh_token
    };
    this.props.setTokens(tokens);
    this.props.setUser(tokens);
  }

  render() {
    if (this.props.access_token === undefined) {
      return <Auth />
    }
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    access_token: state.auth.access_token
  }
};

const mapDispatchToProps  = dispatch => {
  return {
    setTokens: tokens => dispatch(setTokens(tokens)),
    setUser: tokens => dispatch(setUser(tokens))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
