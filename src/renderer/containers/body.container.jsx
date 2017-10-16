import React from 'react';
import PropTypes from 'prop-types';
import Scrollbars from 'react-custom-scrollbars';
import DropZone from '../components/dropzone.component.jsx';
import ReportContainer from './report.container.jsx';
import Results from '../modeles/Results';

const { ipcRenderer } = window.require('electron');

class BodyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollHeight: 360,
    };
  }

  componentWillMount() {
    ipcRenderer.on('size', (event, args) => {
      const { height } = args;
      let bar = document.getElementById('title_bar');
      let barHeight = 0;
      if (bar && getComputedStyle(bar).display !== 'none') {
        barHeight += parseInt(getComputedStyle(bar).height, 10) || 0;
      }
      bar = document.getElementById('control_bar');
      if (bar && (this.props.results !== null || getComputedStyle(bar).display !== 'none')) {
        barHeight += parseInt(getComputedStyle(bar).height, 10) || 0;
      }
      this.setState({ scrollHeight: height - barHeight });
    });
    this.requestSize();
  }

  componentDidMount() {
    window.addEventListener('resize', this.requestSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.requestSize);
  }

  requestSize() {
    ipcRenderer.send('getSize');
  }

  render() {
    return (
      <div id="app_body">
        <Scrollbars
          autoHeight
          autoHeightMax={this.state.scrollHeight}
          renderThumbHorizontal={props => <div {...props} className="scroll_thumb" />}
          renderThumbVertical={props => <div {...props} className="scroll_thumb" />}
        >
          <div className={this.props.results !== null ? 'hidden' : ''}>
            <DropZone
              handleReceivedFile={(file) => {
                this.props.handleReceivedFile(file);
              }}
              isProcessing={this.props.isProcessing}
            />
          </div>
          <div className={this.props.results !== null ? '' : 'hidden'}>
            <ReportContainer
              results={this.props.results}
            />
          </div>
        </Scrollbars>
      </div>
    );
  }
}

BodyContainer.propTypes = {
  handleReceivedFile: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  results: PropTypes.instanceOf(Results),
};

BodyContainer.defaultProps = {
  results: null,
};

export default BodyContainer;
