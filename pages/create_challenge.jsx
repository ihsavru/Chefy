import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import ProblemList from '../components/problem_list';
import { removeProblem, createChallenge, updateChallengeName } from "../actions/create_challenge";

class CreateChallenge extends React.Component {
  updateChallengeName = event => {
    this.props.updateChallengeName(event.target.value);
  };

  createChallenge = () => {
    this.props.createChallenge(this.props.challenge, this.props.user.username);
  };

  render() {
    return (
      <div>
        <h1>Create challenge</h1>
        <input type="text" name="challenge_title" onChange={this.updateChallengeName}/>
        <input type="text" name="challenge_title-days" />
:
        <input type="text" name="challenge_title-hours" />
:
        <input type="text" name="challenge_title-minutes" />
        <Link href='/search_problem'>
          <a>Add Problem</a>
        </Link>
        <ProblemList problems={this.props.challenge.problems} onClick={this.props.removeProblem} mode='remove_problem' />
        <button onClick={this.createChallenge}>Create Challenge</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    challenge: state.challenges.contest,
    user: state.auth.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeProblem: problem => dispatch(removeProblem(problem)),
    updateChallengeName: challengeName => dispatch(updateChallengeName(challengeName)),
    createChallenge: (challenge, username) => dispatch(createChallenge(challenge, username))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateChallenge);
