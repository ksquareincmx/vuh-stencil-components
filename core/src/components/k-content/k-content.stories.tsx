import React from 'react';
import { KContent, KButton } from '../../../component-library-react/src/components';

export default {
  title: 'Components/Content',
  component: 'k-content',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};

const Template = () => (
  <KContent>
    <h1>Title Example</h1>
    <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '1em'}}>
      <KButton>Button 1</KButton>
      <KButton>Button 2</KButton>
      <KButton>Button 3</KButton>
    </div>
  </KContent>
);

// export const Content = Template.bind({});
