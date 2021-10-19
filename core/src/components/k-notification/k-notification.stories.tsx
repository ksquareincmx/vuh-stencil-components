import React from 'react';
import { KNotification, KNotificationGroup, KNotificationItem } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Notification',
  component: 'k-notification',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
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

const Template = (props) => (
  <div className="story-container">
    <h1>Notification</h1>
    <hr />
    <div className="story-description">
      <p>
      </p>
    </div>
    <KNotification {...props}>
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
    </KNotification>
    <CodeViewer>
      {`
  <k-notification
    notification-count="${props.notificationCount}"
    list-start="${props.listStart}"
  >
    <k-notification-group>
        <k-notification-item
          alert-color="#ffa500"
          label="Course"
          time="30m ago"
          isRead="false"
        >
          <p>
            You are been assigned to the
            course <strong> “The best 
            Course of the world” </strong>
          </p>
        </k-notification-item>
        <k-notification-item
          alert-color="purple"
          label="Course"
          time="30m ago"
          isRead="true"
        >
          <p>
            You are been assigned to the
            course <strong> “The best 
            Course of the world” </strong>
          </p>
        </k-notification-item>
    </k-notification-group>
  </k-notification>
      `}
    </CodeViewer>
  </div>
);

export const Notification = Template.bind({});
Notification.args = {
  notificationCount: 2,
  listStart: 'left' 
};
Notification.argTypes = {
  listStart: {
    options: ['left', 'right'],
    control: { type: 'select' }
  }
}