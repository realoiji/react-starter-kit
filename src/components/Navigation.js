import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {
  render() {
    // console.log('this.props navigation', this.props);
    return (
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={{ color: 'red' }}>Home</NavLink>
        </li>
      </ul>
    );
  }
}

export default Navigation;
