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
      <div className={this.props.results !== null ? 'hidden' : ''} />
    );
  }
}

ReportContainer.propTypes = {
  results: PropTypes.instanceOf(Results),
};

ReportContainer.defaultProps = {
  results: null,
};

export default ReportContainer;
