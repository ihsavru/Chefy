import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <p>hi {this.props.user.fullname}</p>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
  };
};

export default connect(mapStateToProps)(Navbar);
