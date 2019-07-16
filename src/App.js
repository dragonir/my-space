import React, { Component } from 'react';
import './App.scss';
// import { Index } from './containers/index';
import RootRouter from './routes/rootRouter.jsx';


class App extends Component {
  render() {
    return (
      <RootRouter />
    );
  }
}

export default App;
