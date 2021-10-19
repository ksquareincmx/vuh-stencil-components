import React from 'react';
import { KNotificationGroup, KNotificationItem } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Notification',
  component: 'k-notification-group'
};

const notificationProps = {
  label: 'Course',
  time: '30m ago',
}

const Item = (props) => (
  <KNotificationItem {...notificationProps} {...props}>
    <p style={{color: '#0a0a0a'}}>
      You are been assigned to the
      course <strong> “The best 
      Course of the world” </strong>
    </p>
  </KNotificationItem>
)

const Template = () => (
  <div className="story-container">
    <h1>Notification Group</h1>
    <hr />
    <div className="story-description">
      <p>
        Going from “Unread” to “read” (on desktop)
        you simply have to do the hover state for
        it to change. But in Mobil the only way
        to change the status is by entering the
        notification.
      </p>
    </div>
    <KNotificationGroup>
      {Item({
        alertColor: '#ffa500',
        isRead: false
      })}
      {Item({
        alertColor: 'purple',
        isRead: true
      })}
    </KNotificationGroup>
    <CodeViewer>
      {`
  <k-dialog-header>
    Dialog Header
  </k-dialog-header>
      `}
    </CodeViewer>
  </div>
);

export const NotificationGroup = Template.bind({});