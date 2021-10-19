import React from 'react';
import { KStepperContent, KStepperContentItem } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Stepper',
  component: 'k-stepper-content'
};

const Template = () => (
  <div className="story-container">
    <h1>Stepper Content</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-stepper--stepper">
          stepper
        </a> component.
      </p>
    </div>
    <KStepperContent>
      <KStepperContentItem>
        Content Step 1
      </KStepperContentItem>
      <KStepperContentItem>
        Content Step 2
      </KStepperContentItem>
      <KStepperContentItem>
        Content Step 3
      </KStepperContentItem>
    </KStepperContent>
    <CodeViewer>
      {`
  <k-stepper-content>
    <k-stepper-content-item>
      Content Step 1
    </k-stepper-content-item>
    <k-stepper-content-item>
      Content Step 2
    </k-stepper-content-item>
    <k-stepper-content-item>
      Content Step 3
    </k-stepper-content-item>
  </k-stepper-content>
      `}
    </CodeViewer>
  </div>
);

export const StepperContent = Template.bind({});
