import React from 'react';
import { KTabItem } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Tab',
  component: 'k-tab-item'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Tab Item</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-tab--tab">
          tab
        </a> component.
      </p>
    </div>
    <KTabItem {...props}>
      Tab 1
    </KTabItem>
    <CodeViewer>
      {`
    <k-tab-item current="${props.current}">Tab 1</k-tab-item>
      `}
    </CodeViewer>
  </div>
);

export const TabItem = Template.bind({});
TabItem.args = { current: false };