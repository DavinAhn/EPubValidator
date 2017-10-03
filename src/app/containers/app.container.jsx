import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from '../components/titlebar.component.jsx';
import BodyContainer from './body.container.jsx';

const ipcRenderer = window.require('electron').ipcRenderer;

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isProcessing: false,
    };
  }

  handleReceivedFile(file) {
    this.setState({ isProcessing: true });
    ipcRenderer.send("verfiy", {
      path: file.path,
      mimeType: file.type,
    });
    ipcRenderer.on('verified', (event, args) => {
      this.setState({ isProcessing: false });
      console.log(`verified`);
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
          isProcessing={this.state.isProcessing}
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
