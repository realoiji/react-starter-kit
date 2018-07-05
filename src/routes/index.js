import React from 'react';
import { Route } from 'react-router-dom';

import { Home, About } from '../pages';

import WrapRoute from '../hoc/WrapRoute';

export const routePath = [
  {
    name: 'Home',
    path: '/',
    component: Home,
    exact: true,
  },
  {
    name: 'About',
    path: '/about',
    component: About,
    exact: true,
  }
];

export default class extends React.Component {
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
    const wrapRouteProps = {
      atLeave: this.handleAtLeave,
      atEnter: this.handleAtEnter,
      atActive: this.handleAtActive,
    };
    return routePath.map(route => (
      <Route key={route.path} exact={route.exact} path={route.path} component={WrapRoute(wrapRouteProps)(route.component)} />
    ));
  }
}
