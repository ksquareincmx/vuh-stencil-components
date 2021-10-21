import React from 'react';
import { KProgressBar } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/ProgressBar',
  component: 'k-progress-bar'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Progress Bar</h1>
    <hr />
    <div className="story-description">
      <p>
        Simple progress bar that receives a property to show the percentage of progress.
      </p>
    </div>
    <KProgressBar {...props}/>
    <CodeViewer>
      {`
  <k-progress-bar value="${props.value}">
  </k-progress-bar>
      `}
    </CodeViewer>
  </div>
);

export const ProgressBar = Template.bind({});
ProgressBar.args = {
  value: 0
}