import React from 'react';
import PropTypes from 'prop-types';
import Message from '../modeles/Message';

class ReportItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <span>{this.props.content.id}</span>
        </div>
        <div>
          <span>{this.props.content.message}</span>
        </div>
      </div>
    );
  }
}

ReportItem.propTypes = {
  content: PropTypes.instanceOf(Message),
};

ReportItem.defaultProps = {
  content: null,
};

export default ReportItem;
