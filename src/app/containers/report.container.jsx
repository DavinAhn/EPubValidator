import React from 'react';
import PropTypes from 'prop-types';
import ReportItem from '../components/reportitem.component.jsx';
import Results from '../modeles/Results';

class ReportContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _epubRender() {
    const items = [];
    const results = this.props.results;
    if (results) {
      results.epub.messages.forEach((item) => {
        items.push(
          (
            <li>
              <ReportItem content={item} />
            </li>
          ));
      });
    }
    return (
      <ol className={items.length > 0 ? '' : 'hidden'}>
        {items}
      </ol>
    );
  }

  render() {
    return (
      <div>
        {this._epubRender()}
      </div>
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
