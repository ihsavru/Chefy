import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Countdown from 'react-countdown-now';
import challengeListStyle from '../styles/challenge_list';
import { startChallenge } from '../actions/current_challenges';

class ChallengeList extends React.Component {
  startChallenge(challenge) {
    this.props.startChallenge(challenge, this.props.user.username);
  }

  render() {
    let ongoingChallenges = [], newChallenges = [], completedChallenges = [];
    if (this.props.challenges) {
      _.forEach(this.props.challenges, (challenge) => {
        let startElement = (<button className="start-btn" onClick={() => this.startChallenge(challenge)}>Start</button>);
        if (challenge.endTime) {
          const renderer = ({ hours, minutes, seconds, completed }) => {
            if (completed) {
              return <span className="completed-text">Completed</span>;
            } else {
              return <span className='countdown-text'>{hours}:{minutes}:{seconds}</span>;
            }
          };
          startElement = (
            <Countdown date={challenge.endTime} renderer={renderer} />
          );
        }
        let challengeElement;
        if (challenge) {
          challengeElement = (
            <div className="list-item">
              <div className="challenge">
                <span>{ challenge.name }</span>
              </div>
              <div className="btn-container">
                {startElement}
              </div>
            </div>
          );
        }

        if (!challenge.endTime) {
          newChallenges = _.concat(ongoingChallenges, challengeElement);
        }

        else if (Date.now() >= challenge.endTime) {
          completedChallenges = _.concat(completedChallenges, challengeElement);
        }

        else if (Date.now() < challenge.endTime) {
          ongoingChallenges = _.concat(ongoingChallenges, challengeElement);
        }
      });
    }
    return (
      <div className="challenge-list">
        {ongoingChallenges}
        {newChallenges}
        {completedChallenges}
        <style jsx global>{ challengeListStyle }</style>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  challenges: state.currentChallenges.challenges,
  user: state.auth.user,
});

const mapDispatchToProps = {
  startChallenge,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeList);
