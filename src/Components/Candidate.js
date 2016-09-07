// We don't need to import Component since we're just using a function to do
// that work.
import React from 'react';

// Candidate is what we'd consider a "dumb" component. Its only interactions
// with the state are functions passed in the from the parent component. Its
// sole focus is displaying data. Note that this is just a function, not a full
// ES6 class, and it takes in props as its only argument.
const Candidate = (props) => (
  <div className="Candidate">
    <h3>{props.firstName} {props.lastName}</h3>
    <strong>Status:</strong><span>{props.status}</span>
    <br/>
    <button onClick={() => props.hireCandidate(props)}>Hire!</button>
    <button onClick={() => props.rejectCandidate(props)}>Reject!</button>
    <button onClick={() => props.unrejectCandidate(props)}>Unreject!</button>
  </div>
);

export { Candidate };
