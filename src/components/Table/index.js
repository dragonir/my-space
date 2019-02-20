import React from 'react';
import SimpleTable from './SimpleTable';
import EnhancedTableHead from './EnhancedTableHead';

function Table () {
  return (
    <div>
      <h1>Tables</h1>
      <h2>SimpleTable</h2>
      <SimpleTable />
      <h2>EnhancedTableHead</h2>
      <EnhancedTableHead />
    </div>
  )
}

export default Table;