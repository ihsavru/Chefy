import React from 'react';
import { connect } from 'react-redux';

class CurrentChallenges extends React.Component {
  render() {
    return (
      <div>
        <h1>Current Challenges</h1>
        <a href="/create_challenge">Create</a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fullname: state.auth.fullname,
    username: state.auth.username,
  }
};

export default connect(mapStateToProps, {})(CurrentChallenges);
