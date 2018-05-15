import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Traffic } from './pages';
import { Navigation } from './components';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route path="/traffic" component={Traffic} />
        </div>
      </Router>
    );
  }
}

export default App;
