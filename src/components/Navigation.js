import React from 'react';
import { NavLink } from 'react-router-dom';
import PT from 'prop-types';
import map from 'lodash/map';

class Navigation extends React.Component {
  static propTypes = {
    routes: PT.arrayOf(PT.shape({
      name: PT.string.isRequired,
      path: PT.string.isRequired,
      exact: PT.bool,
    })).isRequired
  }
  render() {
    // console.log('this.props navigation', this.props);
    const { routes } = this.props;
    return (
      <ul>
        {
          map(routes, route => (
            <li>
              <NavLink exact={route.exact} to={route.path} activeStyle={{ color: 'red' }}>{route.name}</NavLink>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default Navigation;
