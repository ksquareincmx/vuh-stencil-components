import React from 'react';
import { KColumn } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Grid',
  component: 'k-column'
}

const Template = (props) => (
  <div className="story-container">
    <h1>Column</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-grid--grid">
           grid
        </a> component.
      </p>
    </div>
    <KColumn {...props}>
        Column content
    </KColumn>
    <CodeViewer>
      {`
  <k-column>
     Column content
  </k-column>
      `}
    </CodeViewer>
  </div>
);

export const Column = Template.bind({});