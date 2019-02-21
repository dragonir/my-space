import React from 'react';
import SimpleTabs from './SimpleTabs';
import TabsWrappedLabel from './TabsWrappedLabel';
import DisabledTabs from './DisabledTabs';
import FullWidthTabs from './FullWidthTabs';

function Tabs(){
  return (
    <div>
      <h1>Tabs</h1>
      <h2>SimpleTabs 简单选项卡</h2>
      <SimpleTabs />
      <h2>TabsWrappedLabel 包裹标签</h2>
      <TabsWrappedLabel />
      <h2>DisabledTabs 禁用的选项</h2>
      <DisabledTabs />
      <h2>FullWidthTabs 固定选项卡</h2>
      <FullWidthTabs />
    </div>
  )
}

export default Tabs;