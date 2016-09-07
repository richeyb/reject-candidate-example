// Need these for React/Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Allow custom CSS per components
import './CandidateDashboard.css';

// A helper function purely for purposes of DRYing up the code
// Equivalent to:
// function countStatus(status, list) {
//   list
//     .filter(function(candidate) {
//       candidate.status.toLowerCase() === status.toLowerCase()
//     })
//    .length
// }
const countStatus = (status, list) => (
  list
    .filter(candidate => (
      candidate.status.toLowerCase() === status.toLowerCase()
    ))
    .length
);

// Build out our display component. Equivalent to:
// var CandidateDashboard = React.createComponent(...)
class CandidateDashboard extends Component {
  // render() is the only function that is absolutely required to be
  // implemented for an ES6 component.
  render() {
    return (
      <div className="CandidateDashboard">
        <div className="in-hired-status">
          <strong>
            {/* Comments inside of JSX templates look like this */}
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

// mapStateToProps is a way for us to tell Redux and React that we want a
// particular piece of the application state to map to a component's props.
// In this case, we're watching the candidates state from the global
// application state.
const mapStateToProps = (state) => ({
  candidates: state.candidates,
});

// connect(...) is a special function that is provided by the react-redux
// library. It is a higher order function that takes in two arguments:
// 1. The mapStateToProps function, which maps a list of state values
// (see the combineReducers call in Store.js)
// 2. The mapDispatchToProps object, which is in this case is just null.
// Also, note that we typically refer to Components that are hooked into Redux
// state as "Containers" instead of just "Components"
const CandidateDashboardContainer = connect(mapStateToProps)(CandidateDashboard);

// We MUST export the container for obvious reasons. We have no reducers to
// worry about, nor action creators.
export { CandidateDashboardContainer };
