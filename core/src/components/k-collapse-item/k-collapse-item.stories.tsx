import React from 'react';
import { KCollapseItem } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Collapsable',
  component: 'k-collapse-item'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Collapse Item</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-collapsable--collapse-list">
          collapse list
        </a> component.
      </p>
    </div>
    <KCollapseItem {...props}>
      Option
    </KCollapseItem>
    <CodeViewer>
      {`
  <k-collapse-item disabled="${props.disabled}">
    Option
  </k-collapse-item>
      `}
    </CodeViewer>
  </div>
);

export const CollapseItem = Template.bind({});
CollapseItem.args = { disabled: false };