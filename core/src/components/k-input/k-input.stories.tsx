import React from 'react';
import { KInput } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Input',
  component: 'k-input',
  argTypes: {
    type: {
      options: ['text', 'password', 'email', 'tel', 'url', 'number'],
      control: { type: 'select' }
    },
    validationState: {
      options: ['', 'success', 'error'],
      control: { type: 'select' }
    },
  }
};

const Template = (props) => (
  <div className="story-container">
    <h1>Input</h1>
    <hr />
    <div className="story-description">
      <p>
        From mobile there are only two sizes that 
        is <strong>large</strong> and <strong>medium</strong>.
      </p>
      <p>
        The high of the inputs increased 8 Px when on mobile.
      </p>
      <p>
        <i>“Label text shouldn’t be truncated. Keep it short,
        clear, and fully visible. Label text shouldn’t take up 
        multiple lines”</i>, Material Design.
      </p>
    </div>
    <KInput {...props}>
    </KInput>
    <CodeViewer>
      {`
  <k-input
    type="${props.type}"
    label="${props.label}"
    value="${props.value}"
    disabled="${props.disabled}"
    validation-state="${props.validationState}
    name="${props.name}"
    helper-text="${props.helperText}"
    max-length="${props.maxLength}"
    min-length="${props.minLength}"
  >
  </k-input>
      `}
    </CodeViewer>
  </div>
);

export const Input = Template.bind({});
Input.args = {
  type: 'text',
  label: 'Firstname',
  value: 'Elliot Alderson',
  disabled: false,
  validationState: '',
  name: 'firstname',
  helperText: 'Example label',
  maxLength: 0,
  minLength: 0
};