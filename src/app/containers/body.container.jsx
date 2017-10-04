import React from 'react';
import PropTypes from 'prop-types';
import DropZone from '../components/dropzone.component.jsx';
import ReportContainer from './report.container.jsx';
import Results from '../modeles/Results';

class BodyContainer extends React.Component {
  render() {
    return (
      <div id="body">
        <div className={this.props.results !== null ? "hidden" : ""}>
          <DropZone
            handleReceivedFile={(file) => {
              this.props.handleReceivedFile(file);
            }}
            isProcessing={this.props.isProcessing}
          />
        </div>
        <div className={this.props.results !== null ? "" : "hidden"}>
          <ReportContainer
            results={this.props.results}
          />
        </div>
      </div>
    );
  }
}

BodyContainer.propTypes = {
  handleReceivedFile: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  results: PropTypes.instanceOf(Results),
};

export default BodyContainer;
