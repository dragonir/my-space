import React from 'react';
import CircularIndeterminate from './CircularIndeterminate';
import CircularIntegration from './CircularIntegration';
import CircularDeterminate from './CircularDeterminate';
import LinearIndeterminate from './LinearIndeterminate';
import LinearQuery from './LinearQuery';

const Progress = () => {
  return (
    <div>
      <h1>Progress</h1>
      <h2>CircularIndeterminate 不确定环形</h2>
      <CircularIndeterminate />
      <h2>CircularDeterminate 确定环形</h2>
      <CircularDeterminate />
      <h2>CircularIntegration 交互集成</h2>
      <CircularIntegration />
      <h2>LinearIndeterminate 不确定线状</h2>
      <LinearIndeterminate />
      <h2>LinearQuery 查询线状</h2> 
      <LinearQuery />
    </div>
  )
}

export default Progress;