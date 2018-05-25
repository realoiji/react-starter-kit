import React from 'react';

export default props => (Component) => {
  class WrapRoute extends React.PureComponent {
    componentWillMount() {
      if (props && props.atEnter) {
        props.atEnter();
      }
    }
    componentDidMount() {
      if (props && props.atActive) {
        props.atActive();
      }
    }
    componentWillUnmount() {
      if (props && props.atLeave) {
        props.atLeave();
      }
    }
    render() {
      return (
        <Component {...this.props} />
      );
    }
  }
  return WrapRoute;
};
