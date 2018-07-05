import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { AnimatedSwitch } from 'react-router-transition';
import { Home } from './pages';
import { Navigation } from './components';
import WrapRoute from './WrapRoute';

const routePath = [
  {
    path: '/', component: Home
  }
];

class App extends Component {
  // state = {
  //   isLoading: false,
  // }

  componentDidUpdate() {
    console.log('update');
  }

  handleAtEnter = () => {
    // { opacity: 0 }
    // this.setState(() => ({
    //   isLoading: true,
    // }));
    console.log('handleAtEnter');
  }
  handleAtLeave = () => {
    // { opacity: 0 }
    // this.setState(() => ({
    //   isLoading: true,
    // }));
    console.log('handleAtLeave');
  }
  handleAtActive = () => {
    // { opacity: 1 }
    // this.setState(() => ({
    //   isLoading: false,
    // }));
    console.log('handleAtActive');
  }
  render() {
    // const props = {
    //   active: this.state.isLoading,
    // };
    // console.log('props', props);
    const wrapRouteProps = {
      atLeave: this.handleAtLeave,
      atEnter: this.handleAtEnter,
      atActive: this.handleAtActive,
    };

    return (
      <Router>
        <div>
          <Navigation />
          <div
            className="switch-wrapper"
          >
            {
              routePath.map(route => (
                <Route key={route.path} exact path={route.path} component={WrapRoute(wrapRouteProps)(route.component)} />
              ))
            }
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
