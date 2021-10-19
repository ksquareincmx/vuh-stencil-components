import React from 'react';
import { KStepperHeader, KStepperHeaderItem } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Stepper',
  component: 'k-stepper-header'
};

const Template = () => (
  <div className="story-container">
    <h1>Stepper Header</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-stepper--stepper">
          stepper
        </a> component.
      </p>
    </div>
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
    <CodeViewer>
      {`
  <k-stepper-header>
    <k-stepper-header-item done="true">Step 1</k-stepper-header-item>
    <k-stepper-header-item started="true">Step 2</k-stepper-header-item>
    <k-stepper-header-item>Step 3</k-stepper-header-item>
  </k-stepper-header>
      `}
    </CodeViewer>
  </div>
);

export const StepperHeader = Template.bind({});