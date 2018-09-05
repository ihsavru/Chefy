import React from 'react';
import { connect } from 'react-redux';

class CreateChallenge extends React.Component {
  render() {
    return (
      <div>
        <h1>Create challenge</h1>
        <input type="text" name="challenge_title" />
        <input type="text" name="challenge_title-days" />
:
        <input type="text" name="challenge_title-hours" />
:
        <input type="text" name="challenge_title-minutes" />
      </div>
    );
  }
}

export default CreateChallenge;
