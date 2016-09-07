import { createStore, combineReducers } from 'redux';

import CandidatesReducer from './Modules/CandidateList/CandidateList';

const rootReducer = combineReducers({
  candidates: CandidatesReducer,
  currentCandidate: {},
});

export default createStore(rootReducer);
