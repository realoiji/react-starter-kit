import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navigation } from './components';
import Route, { routePath } from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation routes={routePath} />
          <div className="switch-wrapper">
            <Route />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
