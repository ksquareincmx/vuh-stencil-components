import React from 'react';
import { KTooltip } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Tooltip',
  component: 'k-tooltip',
  argTypes: {
    position: {
      options: ['top', 'left', 'right', 'bottom'],
      control: { type: 'select' }
    }
  }
};

const Template = (props) => (
  <div className="story-container">
    <h1>Dialog Header</h1>
    <hr />
    <div className="story-description">
      <p>
        Tooltips display informative text
        when users hover over, focus on,
        or tap an element.
      </p>
      <ul>
        <li>
          <p>
            <strong>Desktop</strong> tooltip on hover.
          </p>
        </li>
        <li>
          <p>
            <strong>Mobile</strong>  tooltip displayed
            through long press.
          </p>
        </li>
      </ul>
    </div>
    <div className="tooltip-c" style={{display: 'flex'}}>
      <KTooltip {...props}>
        Hover me!
      </KTooltip>
    </div>
    <CodeViewer>
      {`
  <k-tooltip
    text="${props.text}"
    position="${props.position}"
  >
    Hover me!
  </k-tooltip>
      `}
    </CodeViewer>
  </div>
);

export const Tooltip = Template.bind({});
Tooltip.args = {
  text: 'Hello world!',
  position: 'bottom'
}