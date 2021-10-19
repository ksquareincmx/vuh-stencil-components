import React from 'react';
import { KNotificationItem } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Notification',
  component: 'k-notification-item'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Notification Item</h1>
    <hr />
    <div className="story-description">
      <ul>
        <li>
          <p>
            Each notification will indicate what
            type it is and will indicate it with
            the name and color of the course type.
          </p>
        </li>
        <li>
          <p>
            When the person hovers in a notification goes from Unread to Read.
          </p>
        </li>
      </ul>
    </div>
    <KNotificationItem {...props}>
      <p style={{color: '#0a0a0a'}}>
        You are been assigned to the
        course <strong> “The best 
        Course of the world” </strong>
      </p>
    </KNotificationItem>
    <CodeViewer>
      {`
  <k-notification-item
    alert-color="${props.alertColor}"
    label="${props.label}"
    time="${props.time}"
    isRead="${props.isRead}"
  >
    <p>
      You are been assigned to the
      course <strong> “The best 
      Course of the world” </strong>
    </p>
  </k-notification-item>
      `}
    </CodeViewer>
  </div>
);

export const NotificationItem = Template.bind({});
NotificationItem.args = {
  alertColor: '#ffa500',
  label: 'Notification text',
  time: 'Right now',
  isRead: false
}