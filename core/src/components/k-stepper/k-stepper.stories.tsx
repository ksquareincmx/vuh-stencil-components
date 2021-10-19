import React from 'react';
import { KStepper, KStepperHeader, KStepperHeaderItem, KStepperContent, KStepperContentItem, } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';
import './preview.css';

export default {
  title: 'Components/Stepper',
  component: 'k-stepper',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};

const Template = () => (
  <div className="story-container">
    <h1>Stepper</h1>
    <hr />
    <div className="story-description">
      <ul>
        <li>
          <p>
            <strong>Desktop:</strong> Editable steps 
            allow users to return later to edit a step.
            These are ideal for workflows that involve
            editing steps within a session.
          </p>
        </li>
        <li>
          <p>
            <strong>Mobile:</strong> Use dots when the
            number of steps is not large.
          </p>
        </li>
      </ul>
    </div>
    <KStepper>
      <KStepperHeader>
        <KStepperHeaderItem done={true}>
          Step 1
        </KStepperHeaderItem>
        <KStepperHeaderItem started={true}>
          Step 2
        </KStepperHeaderItem>
        <KStepperHeaderItem>
          Step 3
        </KStepperHeaderItem>
      </KStepperHeader>
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
    </KStepper>
    <CodeViewer>
      {`
  <k-stepper>
    <k-stepper-header>
      <k-stepper-header-item done="true">Step 1</k-stepper-header-item>
      <k-stepper-header-item started="true">Step 2</k-stepper-header-item>
      <k-stepper-header-item>Step 3</k-stepper-header-item>
    </k-stepper-header>
    <k-stepper-content>
      <k-stepper-content-item>Content Step 1</k-stepper-content-item>
      <k-stepper-content-item>Content Step 2</k-stepper-content-item>
      <k-stepper-content-item>Content Step 3</k-stepper-content-item>
    </k-stepper-content>
  </k-stepper>
      `}
    </CodeViewer>
  </div>
);

export const Stepper = Template.bind({});
