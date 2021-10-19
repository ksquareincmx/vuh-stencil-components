import React from 'react';
import { KCollapseList, KCollapseItem } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Collapsable',
  component: 'k-collapse-list'
}

const Template = () => (
  <div className="story-container">
    <h1>Collapse List</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-collapsable--collapse-menu">
          collapse menu
        </a> component.
      </p>
    </div>
    <KCollapseList>
      <KCollapseItem>
        Option 1
      </KCollapseItem>
      <KCollapseItem>
        Option 2
      </KCollapseItem>
      <KCollapseItem>
        Option 3
      </KCollapseItem>
    </KCollapseList>
    <CodeViewer>
      {`
  <k-collapse-list>
    <k-collapse-item>
      Option 1
    </k-collapse-item>
    <k-collapse-item>
      Option 2
    </k-collapse-item>
    <k-collapse-item>
      Option 3
    </k-collapse-item>
  </k-collapse-list>
      `}
    </CodeViewer>
  </div>
);

export const CollapseList = Template.bind({});