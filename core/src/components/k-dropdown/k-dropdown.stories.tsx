import React from 'react';
import { KDropdown, KDropdownItem } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Dropdown',
  component: 'k-dropdown',
};

const Template = (props) => (
  <div className="story-container">
    <h1>Dropdown</h1>
    <hr />
    <KDropdown {...props}>
      <KDropdownItem name="op0" value="00">
        Select yout option
      </KDropdownItem>
      <KDropdownItem name="op1" value="01">
        Option 1
      </KDropdownItem>
      <KDropdownItem name="op2" value="02">
        Option 2
      </KDropdownItem>
      <KDropdownItem name="op3" value="03">
        Option 3
      </KDropdownItem>
    </KDropdown>
    <CodeViewer>
      {`
  <k-dropdown
    disabled="${props.disabled}"
    variant="${props.variant}"
    color="${props.color}"
    validation-state="${props.validationState}"
    label="${props.label}"
    helper-text="${props.helperText}"
  >
    <k-dropdown-item name="op0" value="00">Select your option</k-dropdown-item>
    <k-dropdown-item name="op1" value="01">Option 1</k-dropdown-item>
    <k-dropdown-item name="op2" value="02">Option 2</k-dropdown-item>
    <k-dropdown-item name="op3" value="03">Option 3</k-dropdown-item>
  </k-dropdown>
      `}
    </CodeViewer>
  </div>
);

export const Dropdown = Template.bind({});
Dropdown.args = {
  disabled: false,
  variant: 'button',
  color: 'primary',
  validationState: '',
  label: '',
  helperText: 'Example label'
};
Dropdown.argTypes = {
  variant: {
    options: ['button', 'input', 'table'],
    control: { type: 'select' }
  },
  color: {
    options: ['primary', 'secondary', 'terciary'],
    control: { type: 'select' }
  },
  validationState: {
    options: ['', 'success', 'error'],
    control: { type: 'select' }
  },
};