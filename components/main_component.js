import React from 'react';
import Auth from "./auth_component"
import { connect } from 'react-redux';
import { setTokens } from "../actions/auth_actions";

class Main extends React.Component {
  componentDidMount() {
    const tokens = {
      access_token: window.localStorage.access_token,
      refresh_token: window.localStorage.refresh_token
    };
    this.props.setTokens(tokens);
  }

  render() {
    if (this.props.access_token === undefined) {
      return <Auth />
    }
    return (
      <div>
        WELCOME
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
    setTokens: tokens => dispatch(setTokens(tokens))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
