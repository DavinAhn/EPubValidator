import React from 'react';
import PropTypes from 'prop-types';
import Results from '../modeles/Results';

class ReportContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

ReportContainer.propTypes = {
  results: PropTypes.instanceOf(Results),
};

export default ReportContainer;
