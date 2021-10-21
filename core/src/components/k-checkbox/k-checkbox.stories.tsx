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
    <div className="story-description">
      <p>
        The checkbox is shown as a square box that is ticked (checked) when activated.
      </p>
      <p>
      You can also activate it by clicking on the label corresponding to the checkbox
      </p>
    </div>
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

