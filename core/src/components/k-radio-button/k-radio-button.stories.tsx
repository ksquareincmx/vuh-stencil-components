import React from 'react';
import { KRadioButton } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/RadioButton',
  component: 'k-radio-button'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Radio Button</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-radiobutton--radio-button-group">
         radio group
        </a> component.
      </p>
    </div>
    <KRadioButton {...props}>
      Option
    </KRadioButton>
    <CodeViewer>
      {`
  <k-radio-button
    name="${props.name}"
    value="${props.value}"
    disabled="${props.disabled}"
    checked="${props.checked}"
  >
    Option
  </k-radio-button>
      `}
    </CodeViewer>
  </div>
);

export const RadioButton = Template.bind({});
RadioButton.args = {
  name: 'option',
  value: 'A',
  disabled: false,
  checked: false
};