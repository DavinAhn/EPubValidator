import React from 'react';
import PropTypes from 'prop-types';
import DropZone from '../components/dropzone.component.jsx';

class BodyContainer extends React.Component {
  render() {
    return (
      <div id="body">
        <DropZone
          isProcessing={this.props.isProcessing}
          handleReceivedFile={(file) => {
            this.props.handleReceivedFile(file);
          }}
        />
      </div>
    );
  }
}

BodyContainer.propTypes = {
  isProcessing: PropTypes.bool.isRequired,
  handleReceivedFile: PropTypes.func.isRequired,
};

export default BodyContainer;
