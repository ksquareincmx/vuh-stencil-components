import React from 'react';
import { KListGroup, KListItem } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/List',
  component: 'k-list-group',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};

const Template = () => (
  <div className="story-container">
    <h1>List Group</h1>
    <hr />
    <div className="story-description">
      <p>
      </p>
    </div>
    <KListGroup>
      <KListItem>
        Home
      </KListItem>
      <KListItem>
        Courses
      </KListItem>
      <KListItem>
        Learning plan
      </KListItem>
    </KListGroup>
    <CodeViewer>
      {`
  <k-list-group>
    <k-list-item>Home</k-list-item>
    <k-list-item>Courses</k-list-item>
    <k-list-item>Learning plan</k-list-item>
  </k-list-group>
      `}
    </CodeViewer>
  </div>
);

export const ListGroup = Template.bind({});