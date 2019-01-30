import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { DenseAppBar } from './components'
import { MediaCard } from './components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DenseAppBar></DenseAppBar>
        <header className="App-header">
          <MediaCard />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
      </div>
    );
  }
}

export default App;
