import React from 'react';

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

export default Candidate;
