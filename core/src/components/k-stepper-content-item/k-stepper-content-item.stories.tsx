import React from 'react';
import { KStepperContentItem } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Stepper',
  component: 'k-stepper-content-item'
};

const Template = () => (
  <div className="story-container">
    <h1>Stepper Content Item</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-stepper--stepper-content">
          stepper content
        </a> component
        inside of <a href="/?path=/story/components-stepper--stepper">
          stepper
        </a> component.
      </p>
    </div>
    <KStepperContentItem>
      Content Step 1
    </KStepperContentItem>
    <CodeViewer>
      {`
  <k-stepper-content-item>
    Content Step 1
  </k-stepper-content-item>
      `}
    </CodeViewer>
  </div>
);

export const StepperContentItem = Template.bind({});