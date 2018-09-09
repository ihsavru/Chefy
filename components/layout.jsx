import React from "react";
import { connect } from 'react-redux';
import Navbar from './navbar';
import Auth from "./auth";

class Layout extends React.Component {

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
  };
};

export default connect(mapStateToProps)(Layout);
