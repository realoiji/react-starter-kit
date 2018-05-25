import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class Preload extends React.Component {
  propTypes = {
    // location: PropTypes.object,
    active: PropTypes.bool,
  }

  // state = {
  //   isLoading: true,
  // }

  // componentDidMount() {
  //   this.hiddenAnimate();
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.location.pathname !== prevProps.location.pathname) {
  //     this.onRouteChanged();
  //   }
  // }

  // onRouteChanged = () => {
  //   this.setState({
  //     isLoading: true,
  //   });
  //   this.hiddenAnimate();
  // }

  // hiddenAnimate = () => {
  //   setTimeout(() => {
  //     this.setState({
  //       isLoading: false,
  //     });
  //   }, 3000);
  // }

  render() {
    const active = (this.props.active) ? 'active' : '';
    return (
      <div className={`preload-container ${active}`}>
        loading
      </div>
    );
  }
}

export default withRouter(Preload);
