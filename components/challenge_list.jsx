import React from 'react';
import { connect } from 'react-redux';
import challengeListStyle from '../styles/challenge_list';

class ChallengeList extends React.Component {
  render() {
    let challengeList;
    if (this.props.challenges) {
      challengeList = this.props.challenges.map(challenge => {
        if (challenge) {
          return (
            <div className="challenge">
              <span>{ challenge.name }</span>
            </div>
          );
        }
      });
    }
    return (
      <div className="challenge-list">
        {challengeList}
        <style jsx global>{ challengeListStyle }</style>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  challenges: state.currentChallenges.challenges,
});

export default connect(mapStateToProps)(ChallengeList);
