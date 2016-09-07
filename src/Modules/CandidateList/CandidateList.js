// Need these for React/Redux
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import our dumb Candidate component.
import { Candidate } from '../../Components/Candidate';

// Allow custom CSS per components
import './CandidateList.css';

// Set up an initial state for the list of candidates
const DEFAULT_CANDIDATES_STATE = [
  { id: 1, firstName: 'Good', lastName: 'Person', status: 'Hired' },
  { id: 2, firstName: 'Bad',  lastName: 'Person', status: 'Rejected' },
  { id: 3, firstName: 'Okay', lastName: 'Person', status: 'Active' },
];

// Set up the possible actions. Since we're using Ducks we don't actually
// need to export these.
const REJECT_CANDIDATE   = 'CandidateList/REJECT_CANDIDATE';
const UNREJECT_CANDIDATE = 'CandidateList/UNREJECT_CANDIDATE';
const HIRE_CANDIDATE     = 'CandidateList/HIRE_CANDIDATE';

// This is just a helper function to make it easier to write the candidate
// modification logic :)
const changeCandidateStatus = (candidates, idToModify, status) => {
  return candidates.map(candidate => {
    if (candidate.id === idToModify) {
      // We're relying on immutable state, so Object.assign is a nice way to
      // return a copied and modified object instead of modifying the object
      // in-place.
      return Object.assign({}, candidate, { status });
    } else {
      return candidate;
    }
  });
};

// This is our state reducer, which modifies the portion of application state
// that we tell Redux we're watching via the 'connect' function.
const CandidatesReducer = (candidates = DEFAULT_CANDIDATES_STATE, action) => {
  switch (action.type) {
    case REJECT_CANDIDATE:
      return changeCandidateStatus(candidates, action.payload.id, 'Rejected');
    case UNREJECT_CANDIDATE:
      return changeCandidateStatus(candidates, action.payload.id, 'Active');
    case HIRE_CANDIDATE:
      return changeCandidateStatus(candidates, action.payload.id, 'Hired');
    default:
      // Every reducer's switch needs to include a handler when it can't or
      // shouldn't interpret an action type.
      return candidates;
  }
};

// These are our action creators that we'll export to expose to other components
// to provide an API for interaction/state modification.
const rejectCandidate = (candidate) => ({
  type: REJECT_CANDIDATE,
  payload: { id: candidate.id },
});
const unrejectCandidate = (candidate) => ({
  type: UNREJECT_CANDIDATE,
  payload: { id: candidate.id },
});
const hireCandidate = (candidate) => ({
  type: HIRE_CANDIDATE,
  payload: { id: candidate.id },
});

// This is just our display logic, essentially. Data-down, actions-up, so we
// need to pass along the candidate action creators above to our dumb component
// below that has no concept of state.
class CandidateList extends Component {
  renderCandidates() {
    if (this.props.candidates && this.props.candidates.length > 0) {
      return this.props.candidates.map(candidate => (
        <Candidate
          {...candidate}
          key={candidate.id}
          rejectCandidate={this.props.rejectCandidate}
          hireCandidate={this.props.hireCandidate}
          unrejectCandidate={this.props.unrejectCandidate}
        />
      ));
    }
  }
  render() {
    return (
      <div className="CandidateList">
        {this.renderCandidates()}
      </div>
    );
  }
}

// mapStateToProps is a way for us to tell Redux and React that we want a
// particular piece of the application state to map to a component's props.
const mapStateToProps = (state) => ({
  candidates: state.candidates,
});

// connect(...) is a special function that is provided by the react-redux
// library. It is a higher order function that takes in two arguments:
// 1. The mapStateToProps function, which maps a list of state values
// (see the combineReducers call in Store.js)
// 2. The mapDispatchToProps object, which is a shortcut that maps action
// creators to a component's props as well. This function is a little magical in
// that it handles hooking up the store and dispatcher to the functions.
// Then it hooks the higher order function to the specified component (the second
// set of parantheses). Also, note that we typically refer to Components that
// are hooked into Redux state as "Containers" instead of just "Components"
const CandidateListContainer = connect(
  mapStateToProps,
  {
    rejectCandidate,
    hireCandidate,
    unrejectCandidate
  }
)(CandidateList);

// Per DUCKS, the Reducer should be our default export since it is the most
// important piece of our application.
export default CandidatesReducer;

// We MUST export the container for obvious reasons. We SHOULD export the action
// creators as per best practices.
export {
  CandidateListContainer,
  rejectCandidate,
  unrejectCandidate,
  hireCandidate,
};
