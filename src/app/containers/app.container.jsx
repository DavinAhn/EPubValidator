import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from '../components/titlebar.component.jsx';
import BodyContainer from './body.container.jsx';
import ControlBar from '../components/controlbar.componet.jsx';

const ipcRenderer = window.require('electron').ipcRenderer;

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latestFile: null,
      isProcessing: false,
      result: null,
    };
  }

  handleReceivedFile(file) {
    this.setState({
      latestFile: file,
      isProcessing: true,
      result: null,
    });
    ipcRenderer.send("verfiy", {
      path: file.path,
      mimeType: file.type,
    });
    ipcRenderer.on('verified', (event, args) => {
      this.setState({
        isProcessing: false,
        result: args,
      });
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
          isProcessing={this.state.isProcessing}
          result={this.state.result}
        />
        <ControlBar
          handleRetry={() => {
            this.handleReceivedFile(this.state.latestFile);
          }}
          handleDone={() => {
            this.setState({
              latestFile: null,
              result: null,
            });
          }}
          result={this.state.result}
        />
      </div>
    );
  }
}

AppContainer.propTypes = {
  window: PropTypes.object.isRequired,
};

export default AppContainer;
