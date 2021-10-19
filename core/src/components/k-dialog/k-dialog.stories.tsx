import React from 'react';
import { KDialog, KDialogContent, KDialogHeader, KDialogBody, KDialogActions, KButton } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Dialog',
  component: 'k-dialog-header',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};

const Template = () => (
  <div className="story-container">
    <h1>Dialog</h1>
    <hr />
    <div className="story-description">
      <p>
      All dialogues when activated will have
      a black background with an opacity of 35%
      </p>
    </div>
    <KDialog>
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
      <KDialogActions>
        <KButton color='terciary'>Cancel</KButton>
        <KButton color='terciary'>Discard</KButton>
      </KDialogActions>
    </KDialog>
    <CodeViewer>
      {`
  <k-dialog>
    <k-dialog-content>
      <k-dialog-header>Dialog Header</k-dialog-header>
      <k-dialog-body>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</k-dialog-body>
    </k-dialog-content>
    <k-dialog-actions>
      <k-button color="terciary">Cancel</k-button>
      <k-button color="terciary">Discard</k-button>
    </k-dialog-actions>
  </k-dialog>
      `}
    </CodeViewer>
  </div>
);

export const Dialog = Template.bind({});