import React from 'react';
import PropTypes from 'prop-types';
import DropZone from '../components/dropzone.component.jsx';

class BodyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <DropZone
          handleReceivedFile={(file) => {
            this.props.handleReceivedFile(file);
          }}
        />
      </div>
    );
  }
}

BodyContainer.propTypes = {
  handleReceivedFile: PropTypes.func.isRequired,
};

export default BodyContainer;
