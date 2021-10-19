import React from 'react';
import { KDialogActions, KButton } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Dialog',
  component: 'k-dialog-actions'
};

const Template = () => (
  <div className="story-container">
    <h1>Dialog Actions</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-dialog--dialog">
          dialog
        </a> component.
      </p>
    </div>
    <KDialogActions>
      <KButton color='terciary'>Cancel</KButton>
      <KButton color='terciary'>Discard</KButton>
    </KDialogActions>
    <CodeViewer>
      {`
  <k-dialog-actions>
    <k-button color="terciary">Cancel</k-button>
    <k-button color="terciary">Discard</k-button>
  </k-dialog-actions>
      `}
    </CodeViewer>
  </div>
);

export const DialogActions = Template.bind({});