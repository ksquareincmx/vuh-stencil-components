import React from 'react';
import { KMenuContent } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Menu',
  component: 'k-menu-content'
};

const Template = () => (
  <div className="story-container">
    <h1>Menu Content</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-menu--menu">
          menu
        </a> component.
      </p>
    </div>
    <KMenuContent>
      Here goes content
    </KMenuContent>
    <CodeViewer>
      {`
  <k-menu-content>
    Here goes content
  </k-menu-content>
      `}
    </CodeViewer>
  </div>
);

export const MenuContent = Template.bind({});
MenuContent.parameters = {
  controls: { hideNoControlsWarning: true },
};