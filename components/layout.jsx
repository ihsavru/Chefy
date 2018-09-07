import React from "react";
import { connect } from 'react-redux';
import Navbar from './navbar';
import Cookies from "js-cookie";
import Auth from "./auth";
import {setTokens, setUser} from "../actions/auth_actions";

class Layout extends React.Component {
  componentDidMount() {
    const tokens = {
      access_token: Cookies.get('access_token'),
      refresh_token: Cookies.get('refresh_token')
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
        {this.props.children}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
