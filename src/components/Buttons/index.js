import React from 'react';
import ContainedButtons from './ContainedButtons';
import TextButtons from './TextButtons';
import OutlinedButtons from './OutlinedButtons';
import FloatingActionButtons from './FloatingActionButtons';


function Buttons () {
  return (
    <div>
      <h1>Buttons</h1>
      <h2>实心按钮 Contained Buttons</h2>
      <ContainedButtons />
      <h2>文本按钮 Text Buttons</h2>
      <TextButtons />
      <h2>描边按钮 Outlined Buttons</h2>
      <OutlinedButtons />
      <h2>浮动操作按钮 Floating Action Buttons</h2>
      <FloatingActionButtons />
    </div>
  )
}

export default Buttons;