import React from 'react';
import { KDropdownItem } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Dropdown',
  component: 'k-dropdown-item'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Dropdown Item</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-dropdown--dropdown">
          dropdown
        </a> component.
      </p>
    </div>
    <KDropdownItem {...props}>
      Option
    </KDropdownItem>
    <CodeViewer>
      {`
  <k-dropdown-item
    name="${props.name}"
    value="${props.value}"
    disabled="${props.disabled}"
    checked="${props.checked}"
  >
    Option
  </k-dropdown-item>
      `}
    </CodeViewer>
  </div>
);

export const DropdownItem = Template.bind({});
DropdownItem.args = {
  name: 'op0',
  value: '00',
  disabled: false,
  checked: false,
};