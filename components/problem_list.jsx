import React from "react";
import { connect } from 'react-redux';

class ProblemList extends React.Component {
  render() {
    let problems;
    if (this.props.problems) {
      problems = this.props.problems.map(problem => {
        return (<div>{problem.problemName}</div>);
      });
    }
    return (
      <div>
        {problems}
      </div>
    );
  }
}

export default (ProblemList);
