import React from 'react';
import { KLabel } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Label',
  component: 'k-label',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};

const Template = () => (
  <div className="story-container">
    <h1>Label</h1>
    <hr />
    <div className="story-description">
      <p>
        Simple label component to use instead of regular label tag.
      </p>
    </div>
    <KLabel>
      Text example
    </KLabel>
    <CodeViewer>
      {`
  <k-label>
    Text example
  </k-label>
      `}
    </CodeViewer>
  </div>
);

export const Label = Template.bind({});