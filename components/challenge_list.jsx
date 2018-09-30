import React from 'react';
import { connect } from 'react-redux';
import Countdown from 'react-countdown-now';
import challengeListStyle from '../styles/challenge_list';
import { startChallenge } from '../actions/current_challenges';

class ChallengeList extends React.Component {
  startChallenge(challenge) {
    this.props.startChallenge(challenge, this.props.user.username);
  }

  render() {
    let challengeList;
    if (this.props.challenges) {
      challengeList = this.props.challenges.map((challenge) => {
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
        if (challenge) {
          return (
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
  user: state.auth.user,
});

const mapDispatchToProps = {
  startChallenge,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChallengeList);
