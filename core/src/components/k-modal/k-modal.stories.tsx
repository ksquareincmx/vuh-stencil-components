import React from 'react';
import { KModal } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Modal',
  component: 'k-modal'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Modal</h1>
    <hr />
    <KModal {...props}>
      <p style={{color: '#0a0a0a', margin: '1.5em'}}>
        Hello world!
      </p>
    </KModal>
    <CodeViewer>
      {`
  <k-modal show="${props.show}" hide-close-button="${props.hideCloseButton}">
    <p style="margin: 1.5em;">
      Hello world!
    </p>
  </k-modal>
      `}
    </CodeViewer>
  </div>
);

export const Modal = Template.bind({});
Modal.args = {
 show: true,
 hideCloseButton: false
};