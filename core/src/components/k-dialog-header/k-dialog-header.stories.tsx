import React from 'react';
import { KDialogHeader } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Dialog',
  component: 'k-dialog-header'
};

const Template = () => (
  <div className="story-container">
    <h1>Dialog Header</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-dialog--dialog-content">
          dialog content
        </a> component.
      </p>
    </div>
    <KDialogHeader>
      Dialog Header
    </KDialogHeader>
    <CodeViewer>
      {`
  <k-dialog-header>
    Dialog Header
  </k-dialog-header>
      `}
    </CodeViewer>
  </div>
);

export const DialogHeader = Template.bind({});