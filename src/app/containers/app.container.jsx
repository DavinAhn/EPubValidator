import React from 'react';
import PropTypes from 'prop-types';
import TitleBar from '../components/titlebar.component.jsx';
import BodyContainer from './body.container.jsx';
import ControlBar from '../components/controlbar.componet.jsx';
import Results from '../modeles/Results';

const ipcRenderer = window.require('electron').ipcRenderer;

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latestFile: null,
      isProcessing: false,
      results: null,
    };
  }

  handleReceivedFile(file) {
    this.setState({
      latestFile: file,
      isProcessing: true,
      results: null,
    });
    ipcRenderer.send('verfiy', {
      path: file.path,
      mimeType: file.type,
    });
    ipcRenderer.on('verified', (event, args) => {
      this.setState({
        isProcessing: false,
        results: new Results(args),
      });
    });
  }

  requestWindowSizeUpdate(size = { height: -1 }) {
    ipcRenderer.send('updateSize', {
      size,
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
          results={this.state.results}
        />
        <ControlBar
          handleRetry={() => {
            this.requestWindowSizeUpdate();
            this.handleReceivedFile(this.state.latestFile);
          }}
          handleDone={() => {
            this.requestWindowSizeUpdate();
            this.setState({
              latestFile: null,
              results: null,
            });
          }}
          results={this.state.results}
        />
      </div>
    );
  }
}

AppContainer.propTypes = {
  window: PropTypes.object.isRequired,
};

export default AppContainer;
