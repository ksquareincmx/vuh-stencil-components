import React from 'react';
import { KTag } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Tag',
  component: 'k-tag',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};

const Template = () => (
  <div className="story-container">
    <h1>Tag</h1>
    <hr />
    <div className="story-description">
      <p>
        The length of the tag will depend on the length of the word,
        it is recommended not to exceed more than two words in a button.
      </p>
    </div>
    <KTag>
      Courses
    </KTag>
    <CodeViewer>
      {`
  <k-tag>
    Courses
  </k-tag>
      `}
    </CodeViewer>
  </div>
);

export const Tag = Template.bind({});