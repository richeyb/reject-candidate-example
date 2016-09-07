// Our standard React imports for creating a new component.
import React, { Component } from 'react';
// Provider is a special Higher Order component that hooks into the React
// "Context" functionality to provide access to the store and dispatchers to all
// child components. This is provided via the react-redux helper library.
import { Provider } from 'react-redux';
// Import our shiny logo
import logo from '../../logo.svg';
// And our shiny CSS. We could also use SASS here if we had the appropriate
// loader configured.
import './App.css';

// Since we're displaying these two components in our root component, we need to
// import them. Remember that they're not default exports, they are named exports,
// so we need to import them with the angle brackets and the qualified name we
// used in the export statement.
import { CandidateListContainer } from '../CandidateList/CandidateList';
import { CandidateDashboardContainer } from '../CandidateDashboard/CandidateDashboard';

// We also need to grab our application store to tell React/Redux where to look.
import Store from '../../Store';

// Finally, build out our root App component.
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

export { App };
