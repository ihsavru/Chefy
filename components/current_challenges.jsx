import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import currentChallengesStyle from '../styles/current_challenges';
import { setCurrentChallenges } from '../actions/current_challenges';
import ChallengeList from './challenge_list';

class CurrentChallenges extends React.Component {
  componentDidUpdate() {
    if (this.props.fetchChallenges) {
      this.props.setCurrentChallenges(this.props.user.username);
    }
  }

  render() {
    return (
      <div className="current-challenges">
        <div className="header">
          <h2>Current Challenges</h2>
        </div>
        <div className="create-button">
          <Link href="/create_challenge">
            <a>+</a>
          </Link>
        </div>
        <ChallengeList />
        <style jsx>{ currentChallengesStyle }</style>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  fetchChallenges: state.currentChallenges.fetchChallenges,
});

const mapDispatchToProps = {
  setCurrentChallenges,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentChallenges);
