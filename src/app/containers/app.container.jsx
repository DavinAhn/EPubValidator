import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from '../components/titlebar.component.jsx';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TitleBar
        title={document.title}
        handleMinimize={() => {
          this.props.window.minimize();
        }}
        handleClose={() => {
          this.props.window.close();
        }}
      />
    );
  }
}

AppContainer.propTypes = {
  window: PropTypes.object.isRequired,
};

export default AppContainer;
