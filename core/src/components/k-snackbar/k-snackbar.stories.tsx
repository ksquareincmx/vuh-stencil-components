import React from 'react';
import { KSnackbar, KButton } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Snackbar',
  component: 'k-snackbar'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Snackbar</h1>
    <hr />
    <div className="story-description">
      <p>
        Snackbars provide brief messages about app processes at the bottom of the screen.
      </p>
    </div>
    <KSnackbar {...props}>
      <KButton shape="smooth" color="primary">
        Dismiss
      </KButton>
    </KSnackbar>
    <CodeViewer>
      {`
  <k-dialog-header
    text="${props.text}"
  >
    <k-button shape="smooth" color="primary">
      Dismiss
    </k-button>
  </k-dialog-header>
      `}
    </CodeViewer>
  </div>
);

export const Snackbar = Template.bind({});
Snackbar.args = {
  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
};