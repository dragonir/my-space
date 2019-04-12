import React from 'react';
import SimpleBadge from './SimpleBadge';
import BadgeMax from './BadgeMax';

const Badges = () => {
  return (
    <div>
      <h1>Badges 徽章</h1>
      <h2>SimpleBadge 简单徽章</h2>
      <SimpleBadge />
      <h2>BadgeMax 最大价值</h2>
      <BadgeMax />
    </div>
  )
}

export default Badges;