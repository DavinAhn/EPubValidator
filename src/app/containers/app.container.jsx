import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from '../components/titlebar.component.jsx';
import BodyContainer from './body.container.jsx';

const ipcRenderer = window.require('electron').ipcRenderer;

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleReceivedFile(file) {
    ipcRenderer.send("verfiy", { file });
    ipcRenderer.on('verified', (event, args) => {
      console.log(`verified ${event}, ${args}`);
    });
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
