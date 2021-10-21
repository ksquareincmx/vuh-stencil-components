import React from 'react';
import { KDivider } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Divider',
  component: 'k-divider',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};

const Template = () => (
  <div className="story-container">
    <h1>Divider</h1>
    <hr />
    <div className="story-description" style={{marginBottom: '2em'}}>
      <p>
        Consist on a horizontal line that can be ideal for separating paragraphs and content blocks.
      </p>
    </div>
    <KDivider />
    <CodeViewer>
      {`
  <k-divider>
  </k-divider>
      `}
    </CodeViewer>
  </div>
);

export const Divider = Template.bind({});