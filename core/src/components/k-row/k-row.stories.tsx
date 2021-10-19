import React from 'react';
import { KRow } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Grid',
  component: 'k-row'
}

const Template = (props) => (
  <div className="story-container">
    <h1>Row</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-grid--grid">
          grid
        </a> component.
      </p>
    </div>
    <KRow {...props}>
      Row Content
    </KRow>
    <CodeViewer>
      {`
  <k-row>
    Row Content
  </k-row>
      `}
    </CodeViewer>
  </div>
);

export const Row = Template.bind({});