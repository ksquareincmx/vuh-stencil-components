import React from 'react';
import {
  KMenu,
  KMenuContent,
  KImg,
  KNotification,
  KNotificationGroup,
  KNotificationItem,
  KAvatar,
  KMenuNav,
  KTab,
  KTabItem,
  KDrawer
} from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Menu',
  component: 'k-menu'
};

const imgFigureProps = {
  src: "https://www.ksquareinc.com/wp-content/uploads/2019/10/Logo.png",
  height: 32
}

const imgProps = {
  src: "https://assets.gitlab-static.net/uploads/-/system/user/avatar/4533028/avatar.png?width=23",
}

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
  <>
  <div className="story-container">
    <h1>Menu</h1>
    <hr />
    <div className="story-description">
      <p>
      </p>
    </div>
    <KDrawer forKey='k-menu'/>
    <KMenu {...props}>
      <KMenuContent>
        <figure>
          <KImg {...imgFigureProps} />
        </figure>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <KNotification notificationCount={2}>
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
        </div>
        <KAvatar>
          <KImg {...imgProps} />
        </KAvatar>
      </KMenuContent>
      <KMenuNav>
        <KTab>
          <KTabItem current={true}>
            Tab 1
          </KTabItem>
          <KTabItem>
            Tab 2
          </KTabItem>
          <KTabItem>
            Tab 3
          </KTabItem>
          <KTabItem>
            Tab 4
          </KTabItem>
        </KTab>
      </KMenuNav>
    </KMenu>
    <CodeViewer>
      {`
  <k-menu menu-key="k-menu"
    menu-key="${props.menuKey}"
    hide-drawer-xs="${props.hideDrawerXs}"
    hide-drawer-sm="${props.hideDrawerSm}"
    hide-drawer-md="${props.hideDrawerMd}"
    hide-drawer-lg="${props.hideDrawerLg}"
    hide-drawer-xl="${props.hideDrawerXl}"
    disable-drawer="${props.disableDrawer}"
  >
    <k-menu-content>
      <figure>
        <k.img src="https://www.ksquareinc.com/wp-content/uploads/2019/10/Logo.png" height="32"></k.img>
      </figure>
      <div style="display: flex; align-items: center;">
        <k-notification notification-count="2">
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
      </div>
      <k-avatar style="margin: 16px;">
        <k-img alt="Abraham Berzunza" src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/4533028/avatar.png?width=23"></k-img>
      </k-avatar>
    </k-menu-content>
    <k-menu-nav>
      <k-tab>
        <k-tab-item current="true">Tab 1</k-tab-item>
        <k-tab-item current="false">Tab 2</k-tab-item>
        <k-tab-item current="false">Tab 3</k-tab-item>
        <k-tab-item current="false">Tab 4</k-tab-item>
      </k-tab>
    </k-menu-nav>
  </k-menu>
      `}
    </CodeViewer>
  </div>
  </>
);

export const Menu = Template.bind({});
Menu.args = {
  menuKey: 'k-menu',
  hideDrawerXs: false,
  hideDrawerSm: false,
  hideDrawerMd: false,
  hideDrawerLg: false,
  hideDrawerXl: false,
  disableDrawer: false,
}