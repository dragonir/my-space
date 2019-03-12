import React, { Component } from 'react';
import './App.scss';
import routes from './routes/index';
import { Index } from './containers/index';

class App extends Component {
  render() {
    return (
      <Index data-routes = {routes} />
    );
  }
}

export default App;
