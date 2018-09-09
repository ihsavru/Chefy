import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

class CurrentChallenges extends React.Component {
  render() {
    return (
      <div>
        <h1>Current Challenges</h1>
        <p>{this.props.challenge.name}</p>
        <Link href="/create_challenge">
          <a>Create</a>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fullname: state.auth.fullname,
    username: state.auth.username,
    challenge:  state.challenges.contest
  };
};

export default connect(mapStateToProps, {})(CurrentChallenges);
