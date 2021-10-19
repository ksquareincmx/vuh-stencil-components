import React from 'react';
import { KDialogBody } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Dialog',
  component: 'k-dialog-body'
};

const Template = () => (
  <div className="story-container">
    <h1>Dialog Body</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-dialog--dialog-content">
          dialog content
        </a> component
        inside of <a href="/?path=/story/components-dialog--dialog">
          dialog
        </a> component.
      </p>
    </div>
    <KDialogBody>
      Lorem ipsum dolor sit amet, consectetuer
      adipiscing elit. Aenean commodo ligula
      eget dolor. Aenean massa.
    </KDialogBody>
    <CodeViewer>
      {`
  <k-dialog-body>
    Lorem ipsum dolor sit amet, consectetuer
    adipiscing elit. Aenean commodo ligula
    eget dolor. Aenean massa.
  </k-dialog-body>
      `}
    </CodeViewer>
  </div>
);

export const DialogBody = Template.bind({});