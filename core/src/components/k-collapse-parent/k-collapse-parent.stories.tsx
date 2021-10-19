import React from 'react';
import { KCollapseParent } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Collapsable',
  component: 'k-collapse-parent'
}

const Template = () => (
  <div className="story-container">
    <h1>Collapse Parent</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-collapsable--collapse-menu">
          collapse-menu
        </a> component.
      </p>
    </div>
    <KCollapseParent>
      Some text...
    </KCollapseParent>
    <CodeViewer>
      {`
  <k-collapse-parent>
    Some text...
  </k-collapse-parent>
      `}
    </CodeViewer>
  </div>
);

export const CollapseParent = Template.bind({});