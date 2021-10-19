import React from 'react';
import { KDrawer, KMenu } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Drawer',
  component: 'k-drawer'
};

const menuArgs = {
  menuKey: 'k-menu',
  hideDrawerXs: false,
  hideDrawerSm: false,
  hideDrawerMd: false,
  hideDrawerLg: false,
  hideDrawerXl: false,
  disableDrawer: false,
}

const Template = (props) => (
  <div className="story-container">
    <h1>Drawer</h1>
    <hr />
    <div className="story-description">
      <p>
        This component must be accompanied
        with a <a href="/?path=/story/components-menu--menu">
          menu
        </a> component.
      </p>
    </div>
    <KDrawer {...props}/>
    <KMenu {...menuArgs}/>
    <CodeViewer>
      {`
  <k-drawer for-key="${props.forKey}">
  </k-drawer>
  <k-menu menu-key="k-menu">
  </k-menu>
      `}
    </CodeViewer>
  </div>
);

export const Drawer = Template.bind({});
Drawer.args = {
  forKey: 'k-menu'
}
