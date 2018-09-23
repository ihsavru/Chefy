import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import ProblemList from '../components/problem_list';
import { removeProblem, createChallenge, updateChallengeName } from "../actions/create_challenge";
import createChallengeStyle from '../styles/create_challenge';

class CreateChallenge extends React.Component {
  updateChallengeName = event => {
    this.props.updateChallengeName(event.target.value);
  };

  createChallenge = () => {
    this.props.createChallenge(this.props.challenge, this.props.user.username);
  };

  render() {
    return (
      <div className='grid'>
        <div className='create-challenge'>
          <div className='header'>
            <h2>Create challenge</h2>
          </div>
          <div className='body'>
            <div className='form'>
              <h3>NAME</h3>
              <h3>DURATION</h3>
              <input type="text" name="challenge_title" placeholder='Challenge Name' value={this.props.challenge.name} onChange={this.updateChallengeName}/>
              <div className="input-duration">
                <input type="time" />
              </div>
            </div>
            <ProblemList problems={this.props.challenge.problems} onClick={this.props.removeProblem} mode='remove_problem' />
            <Link href='/search_problem'>
              <div className='add-problem'>
                <span className='add-symbol'>+</span>
                <span className='add-text'>Add Problems</span>
              </div>
            </Link>
            <Link href='/'>
              <div className='create-challenge-btn-container'>
                <button className='create-challenge-btn' onClick={this.createChallenge}>Create</button>
              </div>
            </Link>
          </div>
          <style jsx>{ createChallengeStyle }</style>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    challenge: state.challenges.contest,
    user: state.auth.user,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    removeProblem: problem => dispatch(removeProblem(problem)),
    updateChallengeName: challengeName => dispatch(updateChallengeName(challengeName)),
    createChallenge: (challenge, username) => dispatch(createChallenge(challenge, username))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateChallenge);
