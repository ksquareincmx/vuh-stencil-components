import React from 'react';
import { KCheckbox } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';


export default {
  title: 'Components/Checkbox',
  component: 'k-checkbox'
}

const Template = (props) => (
  <div className="story-container">
    <h1>Checkbox</h1>
    <hr />
    <KCheckbox {...props}>
      Option
    </KCheckbox>
    <CodeViewer>
      {`
  <k-checkbox
    disabled="${props.disabled}"
    checked="${props.checked}"
    value="${props.value}"
  >
    Option
  </k-checkbox>
      `}
    </CodeViewer>
  </div>
);

export const Checkbox = Template.bind({});
Checkbox.args = {
  disabled: false,
  checked: false,
  value: "1"
}

