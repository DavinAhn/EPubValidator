import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from '../components/titlebar.component.jsx';
import BodyContainer from './body.container.jsx';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleReceivedFile(files) {
    console.log('Received file: ', files.path)
  }

  render() {
    return (
      <div>
        <TitleBar
          title={document.title}
          handleMinimize={() => {
            this.props.window.minimize();
          }}
          handleClose={() => {
            this.props.window.close();
          }}
        />
        <BodyContainer
          handleReceivedFile={(file) => {
            this.handleReceivedFile(file);
          }}
        />
      </div>
    );
  }
}

AppContainer.propTypes = {
  window: PropTypes.object.isRequired,
};

export default AppContainer;
