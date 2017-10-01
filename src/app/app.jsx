import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/app.container.jsx';

// https://github.com/electron/electron/issues/7300
const remote = window.require('electron').remote;

class App extends React.Component {
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
