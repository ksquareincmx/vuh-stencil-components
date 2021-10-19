import React from 'react';
import { KTab, KTabItem } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Tab',
  component: 'k-tab',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};

const Template = () => (
  <div className="story-container">
    <h1>Tab</h1>
    <hr />
    <div className="story-description">
      <p>
      </p>
    </div>
    <KTab>
      <KTabItem current={true}>
        Tab 1
      </KTabItem>
      <KTabItem>
        Tab 2
      </KTabItem>
      <KTabItem>
        Tab 3
      </KTabItem>
      <KTabItem>
        Tab 4
      </KTabItem>
    </KTab>
    <CodeViewer>
      {`
  <k-tab>
    <k-tab-item current="true">Tab 1</k-tab-item>
    <k-tab-item current="false">Tab 2</k-tab-item>
    <k-tab-item current="false">Tab 3</k-tab-item>
    <k-tab-item current="false">Tab 4</k-tab-item>
  </k-tab>
      `}
    </CodeViewer>
  </div>
);

export const Tab = Template.bind({});