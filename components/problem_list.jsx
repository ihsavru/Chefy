import React from 'react';
import problemListStyle from '../styles/problem_list';
import Problem from './problem';

class ProblemList extends React.Component {
  render() {
    let problems;
    if (this.props.problems) {
      problems = this.props.problems.map(problem => (
        <Problem onClick={this.props.onClick} problem={problem} mode={this.props.mode} />
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
