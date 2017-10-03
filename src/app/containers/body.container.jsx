import React from 'react';
import PropTypes from 'prop-types';
import DropZone from '../components/dropzone.component.jsx';
import ReportContainer from './report.container.jsx';

class BodyContainer extends React.Component {
  render() {
    return (
      <div id="body">
        <div className={this.props.result !== null ? "hidden" : ""}>
          <DropZone
            handleReceivedFile={(file) => {
              this.props.handleReceivedFile(file);
            }}
            isProcessing={this.props.isProcessing}
          />
        </div>
        <div className={this.props.result !== null ? "" : "hidden"}>
          <ReportContainer
            result={this.props.result}
          />
        </div>
      </div>
    );
  }
}

BodyContainer.propTypes = {
  handleReceivedFile: PropTypes.func.isRequired,
  isProcessing: PropTypes.bool.isRequired,
  result: PropTypes.object,
};

export default BodyContainer;
