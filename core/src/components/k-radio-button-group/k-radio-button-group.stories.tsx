import React from 'react';
import { KRadioButtonGroup, KRadioButton } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';
import './preview.css';

export default {
  title: 'Components/RadioButton',
  component: 'k-radio-button-group',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};

const radioProps = {
  name: 'option',
  disabled: false,
  checked: false
}

const Template = (props) => (
  <div className="story-container">
    <h1>Radio Button Group</h1>
    <hr />
    <div className="story-description">
      <p>
        Use radio buttons when only one item can be selected from a list.
      </p>
    </div>
    <KRadioButtonGroup {...props}>
      <KRadioButton {...radioProps} value='A'>
        A
      </KRadioButton>
      <br />
      <KRadioButton {...radioProps} value='B'>
        B
      </KRadioButton>
      <br />
      <KRadioButton {...radioProps} value='C'>
        C
      </KRadioButton>
    </KRadioButtonGroup>
    <CodeViewer>
      {`
  <k-radio-button-group>
    <k-radio-button
      name="option"
      value="A"
      disabled="false"
      checked="false"
    >
      Option A
    </k-radio-button>
    <k-radio-button
      name="option"
      value="B"
      disabled="false"
      checked="false"
    >
      Option B
    </k-radio-button>
    <k-radio-button
      name="option"
      value="C"
      disabled="false"
      checked="false"
    >
      Option C
    </k-radio-button>
  </k-radio-button-group>
      `}
    </CodeViewer>
  </div>
);

export const RadioButtonGroup = Template.bind({});
