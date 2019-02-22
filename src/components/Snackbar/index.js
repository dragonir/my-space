import React from 'react';

import SimpleSnackbar from './SimpleSnackbar';
import CustomizedSnackbars from './CustomizedSnackbars';

function Snackbar(){
  return (
    <div>
      <h1>Snackbar</h1>
      <h2>基本消息条 SimpleSnackbar</h2>
      <SimpleSnackbar />
      <h2>自定义的消息条 CustomizedSnackbars</h2>
      <CustomizedSnackbars />
    </div>
  )
}

export default Snackbar;