import React from 'react';
import { KDialogContent, KDialogHeader, KDialogBody } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Dialog',
  component: 'k-dialog-content'
};

const Template = () => (
  <div className="story-container">
    <h1>Dialog Content</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-dialog--dialog">
          dialog
        </a> component.
      </p>
    </div>
    <KDialogContent>
      <KDialogHeader>
        Dialog Header
      </KDialogHeader>
      <KDialogBody>
        Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit. Aenean commodo ligula eget
        dolor. Aenean massa.
      </KDialogBody>
    </KDialogContent>
    <CodeViewer>
      {`
  <k-dialog-content>
    <k-dialog-header>Dialog Header</k-dialog-header>
    <k-dialog-body>
      Lorem ipsum dolor sit amet, consectetuer
      adipiscing elit. Aenean commodo ligula eget
      dolor. Aenean massa.
    </k-dialog-body>
  </k-dialog-content>
      `}
    </CodeViewer>
  </div>
);

export const DialogContent = Template.bind({});