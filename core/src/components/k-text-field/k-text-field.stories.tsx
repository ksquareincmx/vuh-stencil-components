import React from 'react';
import { KTextField } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Text Field',
  component: 'k-text-field',
  argTypes: {
    validationState: {
      options: ['success' , 'error'],
      control: { type: 'select' }
    }
  }
};

const Template = (props) => (
  <div className="story-container">
    <h1>Text Field</h1>
    <hr />
    <div className="story-description">
      <p>
        Can be used to replace <b><i>textarea</i></b> tag. Using the component properties help having an easier control of the behaviour.
      </p>
    </div>
    <KTextField {...props}>
      Courses
    </KTextField>
    <CodeViewer>
      {`
  <k-text-field
    label="${props.label}"
    value="${props.value}"
    disabled="${props.disabled}"
    validation-state="${props.validationState}"
    name="${props.name}"
    helper-text="${props.helperText}"
    max-length="${props.maxLength}"
    min-length="${props.minLength}"
  >
    Courses
  </k-text-field>
      `}
    </CodeViewer>
  </div>
);

export const TextField = Template.bind({});
TextField.args = {
  label: 'Description',
  value: '',
  disabled: false,
  validationState: '',
  name: '',
  helperText: '',
  maxLength: 0,
  minLength: 0,
};