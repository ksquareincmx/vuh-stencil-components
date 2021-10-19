import React from 'react';
import { KBannerText } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Banner',
  component: 'k-banner-text'
}

const Template = () => (
  <div className="story-container">
    <h1>Banner Text</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-banner--banner">
          banner
        </a> component.
      </p>
    </div>
    <KBannerText>
      Hello world
    </KBannerText>
    <CodeViewer>
      {`
  <k-banner-text>
    Hello world
  </k-banner-text>
      `}
    </CodeViewer>
  </div>
);


export const BannerText = Template.bind({});
BannerText.parameters = {
  controls: { hideNoControlsWarning: true },
};