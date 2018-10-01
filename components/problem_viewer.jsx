import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { setProblemDetails } from '../actions/create_challenge';
import problemViewerStyle from '../styles/problem_viewer';

class ProblemViewer extends React.Component {
  componentDidMount() {
    if (this.props.problem.contestCode) {
      this.props.setProblemDetails(this.props.problem.problemCode, this.props.problem.contestCode);
    }
    else {
      this.props.setProblemDetails(this.props.problem.problemCode);
    }
  };

  render() {
    const customStyle = {
      content: {
        width: '80%',
        height: '80%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0px',
        boxShadow: '0 0 8px #b9b9b9',
      },
    };

    return (
      <Modal
        isOpen={this.props.isModalOpen}
        contentLabel="Example Modal"
        style={customStyle}
      >
        <div className="modal-header">
          <h2>{this.props.problemDetails.problemName}</h2>
          <div className='close-btn-container'>
            <a onClick={this.props.closeModal}>X</a>
          </div>
        </div>
        <div className="modal-body">
          <p dangerouslySetInnerHTML={{ __html: this.props.problemDetails.body }} />
        </div>
        <div className="modal-footer">
          <button onClick={this.props.closeModal}>Close</button>
        </div>
        <style jsx>{ problemViewerStyle }</style>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    problemDetails: state.challenges.problemDetails,
  }
};

const mapDispatchToProps = {
  setProblemDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProblemViewer);
