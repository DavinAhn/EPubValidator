import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/app.container.jsx';

require('../sass/index.scss');

// https://github.com/electron/electron/issues/7300
const remote = window.require('electron').remote;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <AppContainer
        window={remote.getCurrentWindow()}
      />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
