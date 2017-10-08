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
      <div className={`report_item item_${this.props.content.severity.toLowerCase()}`}>
        <div className="report_id">{this.props.content.id}</div>
        <div className="report_message">{this.props.content.message}</div>
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
