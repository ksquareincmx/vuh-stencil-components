import React from 'react';
import { KListItem } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/List',
  component: 'k-list-item'
};

const Template = () => (
  <div className="story-container">
    <h1>List Item</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-list--list-group">
          list group
        </a> component.
      </p>
    </div>
    <KListItem>
      Item
    </KListItem>
    <CodeViewer>
      {`
  <k-list-item>
    Item
  </k-list-item>
      `}
    </CodeViewer>
  </div>
);

export const ListItem = Template.bind({});