import React from 'react';
import { KMenuNav } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Menu',
  component: 'k-menu-nav'
};

const Template = () => (
  <div className="story-container">
    <h1>Menu Nav</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-menu--menu">
          menu
        </a> component.
      </p>
    </div>
    <KMenuNav>
      Nav content
    </KMenuNav>
    <CodeViewer>
      {`
  <k-menu-nav>
    Nav content
  </k-menu-nav>
      `}
    </CodeViewer>
  </div>
);

export const MenuNav = Template.bind({});
MenuNav.parameters = {
  controls: { hideNoControlsWarning: true },
};