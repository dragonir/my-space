import React from 'react';
import ButtonAppBar from './ButtonAppBar';
import SimpleAppBar from './SimpleAppBar';

const AppBar = () => {
  return (
    <div>
      <h1>App Bar</h1>
      <h2>ButtonAppBar 带按钮的应用栏</h2>
      <ButtonAppBar />
      <h2>SimpleAppBar 简单的应用栏</h2>
      <SimpleAppBar />
    </div>
  )
}

export default AppBar;