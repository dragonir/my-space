import React from 'react';
import SimpleBottomNavigation from './SimpleBottomNavigation';
import LabelBottomNavigation from './LabelBottomNavigation';

const BottomNavigation = () => {
  return (
    <div>
      <h1>Bottom Navigation 底部导航</h1>
      <h2>SimpleBottomNavigation 简单底部导航</h2>
      <SimpleBottomNavigation />
      <h2>LabelBottomNavigation 无标签的底部导航</h2>
      <LabelBottomNavigation />
    </div>
  );
}

export default BottomNavigation;