import React from 'react';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  render() {
    return (
      <p>hi {this.props.fullname}</p>
    );
  }
}

const mapStateToProps = state => {
  return {
    fullname: state.auth.fullname,
    username: state.auth.username,
  }
};

export default connect(mapStateToProps, {})(Navbar);
