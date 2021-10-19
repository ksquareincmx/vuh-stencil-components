import React from 'react';
import { KSwitch } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Switch',
  component: 'k-switch'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Checkbox</h1>
    <hr />
    <div className="story-description">
      <p>
      </p>
    </div>
    <KSwitch {...props}/>
    <CodeViewer>
      {`
  <k-switch
    label="${props.label}"
    disabled="${props.disabled}"
    checked="${props.checked}"
  >
  </k-switch>
      `}
    </CodeViewer>
  </div>
);

export const Switch = Template.bind({});
Switch.args = {
  label: 'Example label',
  disabled: false,
  checked: false
};