import React from 'react';
import SimpleExpansionPanel from './SimpleExpansionPanel';
import CustomizedExpansionPanel from './CustomizedExpansionPanel';

const ExpansionPanels = () => {
  return (
    <div>
      <h1>ExpansionPanels 扩展面板</h1>
      <h2>SimpleExpansionPanel 简单的扩展面板</h2>
      <SimpleExpansionPanel />
      <h2>CustomizedExpansionPanel 定制扩展面板</h2>
      <CustomizedExpansionPanel />
    </div>
  )
}

export default ExpansionPanels;