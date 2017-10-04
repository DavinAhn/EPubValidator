import React from 'react';
import PropTypes from 'prop-types';
import Results from '../modeles/Results';

class ControlBar extends React.Component {
  render() {
    const results = this.props.results;
    const summary = [];
    if (results) {
      const checker = results.epub.checker;
      const badgeType = ['danger', 'danger', 'warning', 'info'];
      const names = ['Fatal', 'Error', 'Warning', 'Usage'];
      ['nFatal', 'nError', 'nWarning', 'nUsage'].forEach((key, idx) => {
        summary.push((<span className={`badge badge-${badgeType[idx]}`}>{names[idx]} {checker[key]}</span>));
      });
    }
    return (
      <nav id="control_bar" className={`fixed-bottom navbar navbar-dark bg-dark ${this.props.results !== null ? '' : 'hidden'}`}>
        <span className="control_bar_summary">
          {summary}
        </span>
        <span className="control_bar_right_buttons">
          <button type="button" className="button control_bar_button" aria-label="Retry" onClick={this.props.handleRetry}>
            <svg id="control_bar_retry" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </button>
          <button type="button" className="button control_bar_button" aria-label="Done" onClick={this.props.handleDone}>
            <svg id="control_bar_done" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </button>
        </span>
      </nav>
    );
  }
}

ControlBar.propTypes = {
  handleRetry: PropTypes.func.isRequired,
  handleDone: PropTypes.func.isRequired,
  results: PropTypes.instanceOf(Results),
};

export default ControlBar;
