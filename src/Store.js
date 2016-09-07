// Redux relies on two functions to be able to create our application store.
// createStore creates the actual store, a la Flux. combineReducers tells
// Redux which key in the application store corresponds to which Reducer
// function.
import { createStore, combineReducers } from 'redux';

// We need the reducer that we default exported from the CandidateList module.
import CandidatesReducer from './Modules/CandidateList/CandidateList';

// Finally, we put together what the reducer looks like. We say that anything
// coming from the candidates key of our state passes through the
// CandidatesReducer function. I also set up a currentCandidate state that
// could be used to hold a candidate that we're currently selecting/looking at
// (although it is currently unused).
const rootReducer = combineReducers({
  candidates: CandidatesReducer,
  currentCandidate: {},
});

// We should default export the created application store to use elsewhere.
export default createStore(rootReducer);
