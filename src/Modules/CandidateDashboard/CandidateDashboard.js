import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CandidateDashboard.css';

const countStatus = (status, list) => (
  list.filter(candidate => (
    candidate.status.toLowerCase() === status.toLowerCase()
  )).length
);

class CandidateDashboard extends Component {
  render() {
    return (
      <div className="CandidateDashboard">
        <div className="in-hired-status">
          <strong>
            {countStatus('Hired', this.props.candidates)}
            &nbsp;
            Candidates Hired
          </strong>
        </div>
        <div className="in-rejected-status">
          <strong>
            {countStatus('Rejected', this.props.candidates)}
            &nbsp;
            Candidates Rejected
          </strong>
        </div>
        <div className="in-active-status">
          <strong>
            {countStatus('Active', this.props.candidates)}
            &nbsp;
            Candidates Active
          </strong>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  candidates: state.candidates,
});

const CandidateDashboardContainer = connect(mapStateToProps)(CandidateDashboard);

export { CandidateDashboardContainer };
