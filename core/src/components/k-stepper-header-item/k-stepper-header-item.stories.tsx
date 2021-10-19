import React from 'react';
import { KStepperHeaderItem } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Stepper',
  component: 'k-stepper-header-item'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Stepper Header Item</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-stepper--stepper-header">
          stepper header
        </a> component
        inside of <a href="/?path=/story/components-stepper--stepper">
          stepper
        </a> component.
      </p>
    </div>
    <KStepperHeaderItem {...props}>
      Step 1
    </KStepperHeaderItem>
    <CodeViewer>
      {`
  <k-stepper-header-item
    done="${props.done}"
    started="${props.started}"
  >
    Step 1
  </k-stepper-header-item>
      `}
    </CodeViewer>
  </div>
);

export const StepperHeaderItem = Template.bind({});
StepperHeaderItem.args = {
  done: false,
  started: false
};