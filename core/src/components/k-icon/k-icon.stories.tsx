import React from 'react';
import { KIcon } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Icon',
  component: 'k-icon',
  argTypes: {
    size: {
      options: ['small', 'medium', 'large', 'extra-large'],
      control: { type: 'select' }
    },
    name: {
      options: ['alert-circle'
      ,'assistant'
      ,'attachment'
      ,'bookmark-border'
      ,'bookmark'
      ,'cached'
      ,'check-circle'
      ,'close'
      ,'cloud-upload'
      ,'colorize'
      ,'delete'
      ,'done'
      ,'drag-indicator'
      ,'edit'
      ,'event'
      ,'file-copy'
      ,'finish-1'
      ,'finish-2'
      ,'finish-3'
      ,'flip-camera-ios'
      ,'school'
      ,'highlight-off'
      ,'info'
      ,'insert-drive-file'
      ,'keyboard-arrow-down'
      ,'keyboard-arrow-left'
      ,'keyboard-arrow-right'
      ,'keyboard-arrow-up'
      ,'menu'
      ,'network-wired'
      ,'notifications-active'
      ,'notifications'
      ,'person'
      ,'photo-camera'
      ,'playlist-add-check'
      ,'question-answer'
      ,'remove-red-eye'
      ,'ribbon'
      ,'search'
      ,'settings'
      ,'supervised-user-circle'
      ,'swap-vert'
      ,'swap-vert-down'
      ,'swap-vert-up'
      ,'tune'
      ,'view-week'
      ,'visibility-off'
      ,'add-circle'
      ,'bookmarks'
      ,'dashboard'],
      control: { type: 'select' }
    },
  }
};

const Template = (props) => (
  <div className="story-container">
    <h1>Icon</h1>
    <hr />
    <div className="story-description">
      <p>
        System icons are displayed as 24 x 24 dp.
        Create icons for viewing at 100% scale for
        pixel-perfect accuracy.
      </p>
    </div>
    <KIcon {...props}>
    </KIcon>
    <CodeViewer>
      {`
  <k-icon size="${props.size}" name="${props.name}">
  </k-icon>
      `}
    </CodeViewer>
  </div>
);

export const Icon = Template.bind({});
Icon.args = {
  size: 'small',
  name: 'alert-circle'
};