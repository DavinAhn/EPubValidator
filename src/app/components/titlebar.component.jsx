import React from 'react';
import PropTypes from 'prop-types';

class TitleBar extends React.Component {
  render() {
    return (
      <nav id="title_navbar" className="navbar fixed-top navbar-dark bg-dark">
        <span className="h-75 navbar-brand mb-0">{this.props.title}</span>
        <span className="title_nav_bar_right_buttons">
          <button type="button" className="title_nav_bar_button" aria-label="Minimize Window" onClick={this.props.handleMinimize}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 13H5v-2h14v2z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </button>
          <button type="button" className="title_nav_bar_button" aria-label="Close" onClick={this.props.handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              <path d="M0 0h24v24H0z" fill="none" />
            </svg>
          </button>
        </span>
      </nav>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  handleMinimize: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TitleBar;
