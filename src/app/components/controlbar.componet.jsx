import React from 'react';
import PropTypes from 'prop-types';
import TimeAgo from 'react-timeago';
import Results from '../modeles/Results';

class ControlBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const results = this.props.results;
    const summary = [];
    if (results) {
      const names = ['fatal', 'error', 'warning', 'info', 'usage'];
      ['nFatal', 'nError', 'nWarning', 'nInfo', 'nUsage'].forEach((key, idx, list) => {
        summary.push(
          (
            <div className="control_bar_result_summary">
              <span className={`result_${names[idx]}`}>
                {names[idx].charAt(0).toUpperCase() + names[idx].slice(1)} {results[key]}
              </span>
              {idx < list.length - 1 ? ',' : ''}&nbsp;
            </div>
          ));
      });
    }
    return (
      <nav id="control_bar" className={`fixed_bottom navbar ${this.props.results !== null ? '' : 'hidden'}`}>
        <div className="control_bar_summary">
          {summary}
          <div className="time_ago">
            (<TimeAgo date={Date()} />)
          </div>
        </div>
        <div className="control_bar_right_buttons">
          <button type="button" className="button control_bar_button" aria-label="Retry" onClick={this.props.handleRetry}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
          <button type="button" className="button control_bar_button" aria-label="Done" onClick={this.props.handleDone}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </button>
        </div>
      </nav>
    );
  }
}

ControlBar.propTypes = {
  handleRetry: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
  results: PropTypes.instanceOf(Results),
};

ControlBar.defaultProps = {
  results: null,
};

export default ControlBar;
