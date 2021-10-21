import React from 'react';
import { KCollapseMenu, KCollapseParent, KCollapseList, KCollapseItem } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Collapsable',
  component: 'k-collapse-menu',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
}

const Template = () => (
  <div className="story-container">
    <h1>Collapse Menu</h1>
    <hr />
    <div className="story-description">
      <p>
        It is composed by a component parent, which when is hover it show a list of options.
      </p>
    </div>
    <KCollapseMenu>
      <KCollapseParent>
        Hover me!
      </KCollapseParent>
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
        <KCollapseItem disabled={true}>
          Option 4 (disabled)
        </KCollapseItem>
      </KCollapseList>
    </KCollapseMenu>
    <CodeViewer>
      {`
  <k-collapse-menu>
    <k-collapse-parent>
      Hover me!
    </k-collapse-parent>
    <k-collapse-list>
      <k-collapse-item>Option 1</k-collapse-item>
      <k-collapse-item>Option 2</k-collapse-item>
      <k-collapse-item>Option 3</k-collapse-item>
      <k-collapse-item disabled="true">Option 4 (disabled)</k-collapse-item>
    </k-collapse-list>
  </k-collapse-menu>
      `}
    </CodeViewer>
  </div>
);

export const CollapseMenu = Template.bind({});