import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Select from 'react-select';
import _ from 'lodash';
import ProblemList from '../components/problem_list';
import { loadProblemsByCategory, loadProblemByCode, addProblem } from '../actions/create_challenge.js';

class SearchProblem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contestCode: '',
      problemCode: '',
      problemCategory: null
    }
  };

  setContestCode = event => {
    this.setState({
      contestCode: _.toUpper(event.target.value),
      problemCategory: null
    });
  };

  setProblemCode = event => {
    this.setState({
      problemCode: _.toUpper(event.target.value),
      problemCategory: null
    });
  };

  setCategory = selectedCategory => {
    this.setState({
      problemCategory: selectedCategory,
      contestCode: '',
      problemCode: ''
    });
  };

  loadProblems = () => {
    if (this.state.problemCategory) {
      this.props.loadProblemsByCategory(this.state.problemCategory.value);
    }
    else {
      this.props.loadProblemByCode(this.state.contestCode, this.state.problemCode);
    }
  };

  render() {
    const categoriesList = [
      { value: 'school', label: 'School' },
      { value: 'easy', label: 'Easy'},
      { value: 'medium', label: 'Medium'},
      { value: 'hard', label: 'Hard'},
      { value: 'challenge', label: 'Challenge'},
      { value: 'extcontest', label: 'ExtContest'}
    ];

    return (
      <div>
        <h3>Search specific problem</h3>
        <input name="contestCode" value={this.state.contestCode} placeholder="contest code" onChange={this.setContestCode} />
        <input name="problemCode" value={this.state.problemCode} placeholder="problem code" onChange={this.setProblemCode} />
        <span>OR</span>
        <h3>Category</h3>
        <Select value={this.state.problemCategory} options={categoriesList} onChange={this.setCategory} />
        <button onClick={this.loadProblems}>GO</button>
        <ProblemList problems={this.props.problems} onClick={this.props.addProblem} mode='add_problem' />
        <Link href='/create_challenge'>
          <a>Done</a>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      problems: state.challenges.problemList
    }
};

const mapDispatchToProps = dispatch => {
  return {
    loadProblemsByCategory: category => dispatch(loadProblemsByCategory(category)),
    loadProblemByCode: (contestCode, problemCode) => dispatch(loadProblemByCode(contestCode, problemCode)),
    addProblem: problem => dispatch(addProblem(problem))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchProblem);
