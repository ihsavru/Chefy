import React from 'react';
import problemListStyle from '../styles/problem_list';

class ProblemList extends React.Component {
  render() {
    let buttonName;
    if (this.props.mode === 'add_problem') {
      buttonName = 'Add';
    } else if (this.props.mode === 'remove_problem') {
      buttonName = 'Remove';
    }
    let problems;
    if (this.props.problems) {
      problems = this.props.problems.map(problem => (
        <div className="list-item">
          <div>
            <span className='problem-name' key={problem.problemCode}>{problem.problemName}</span>
            <span className='problem-code'>{ problem.problemCode }</span>
          </div>
          <div className='btn-container'>
            <button className='toggle-btn' onClick={() => this.props.onClick(problem)}>{buttonName}</button>
          </div>
        </div>
      ));
    }
    return (
      <div>
        {problems}
        <style jsx global>{ problemListStyle }</style>
      </div>
    );
  }
}

export default (ProblemList);
