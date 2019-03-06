import React from 'react';
import SimpleChips from './SimpleChips';
import OutlinedChips from './OutlinedChips';
import ChipsArray from './ChipsArray';

function Chips(){
  return (
    <div>
      <h1>Chips 纸片</h1>
      <h2>SimpleChips 基础纸片</h2>
      <SimpleChips />
      <h2>OutlinedChips 描边纸片</h2>
      <OutlinedChips />
      <h2>ChipsArray 纸片组</h2>
      <ChipsArray />
    </div>
  )
}

export default Chips;