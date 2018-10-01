import React from 'react';
import { connect } from 'react-redux';
import ProblemViewer from './problem_viewer';
import { clearProblemDetails } from '../actions/create_challenge';

class Problem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sModalOpen: false,
    }
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
    this.props.clearProblemDetails();
  };

  handleClick = (event) => {
    this.props.onClick(this.props.problem);
    event.stopPropagation();
  };

  render() {
    let buttonName;
    if (this.props.mode === 'add_problem') {
      buttonName = 'Add';
    } else if (this.props.mode === 'remove_problem') {
      buttonName = 'Remove';
    }
    if(this.state.isModalOpen) {
      return (
        <ProblemViewer
          problem={this.props.problem}
          closeModal={this.closeModal}
          isModalOpen={this.state.isModalOpen}
          addProblem={this.handleClick}
        />
      );
    }

    else {
      return (
        <div>
          <div className="list-item" onClick={this.openModal}>
            <div>
              <span className="problem-name" key={ this.props.problem.problemCode }>{ this.props.problem.problemName }</span>
              <span className="problem-code">{ this.props.problem.problemCode }</span>
              <span className="problem-accuracy">{ this.props.problem.accuracy.toFixed(2) }</span>
            </div>
            <div className="btn-container">
              <button className="toggle-btn" onClick={this.handleClick}>{buttonName}</button>
            </div>
          </div>
        </div>
      )
    }
  }
}

const mapDispatchToProps = {
  clearProblemDetails,
};

export default connect(null, mapDispatchToProps)(Problem);
