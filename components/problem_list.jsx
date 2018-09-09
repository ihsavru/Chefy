import React from "react";

class ProblemList extends React.Component {
  render() {
    let buttonName;
    if (this.props.mode === 'add_problem') {
      buttonName = 'Add';
    }
    else if (this.props.mode === 'remove_problem') {
      buttonName = 'Remove';
    }
    let problems;
    if (this.props.problems) {
      problems = this.props.problems.map(problem => {
        return (
          <div>
            <div key={problem.problemCode}>{problem.problemName}</div>
            <button onClick={() => this.props.onClick(problem)}>{buttonName}</button>
          </div>
        );
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
