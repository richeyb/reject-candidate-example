import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from '../../logo.svg';
import './App.css';

import { CandidateListContainer } from '../CandidateList/CandidateList';
import { CandidateDashboardContainer } from '../CandidateDashboard/CandidateDashboard';

import Store from '../../Store';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <div className="App-header">
            <img
              className="App-logo"
              src={logo}
              style={{width: '150px', height: '150px'}}
              alt="React Logo"
            />
            <br />
            Example React/Redux Candidate Dashboard
          </div>
          <CandidateDashboardContainer />
          <hr />
          <CandidateListContainer />
        </div>
      </Provider>
    );
  }
}

export default App;
