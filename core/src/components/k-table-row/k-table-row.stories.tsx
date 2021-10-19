import React from 'react';
import { KTableRow } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Table',
  component: 'k-table-row'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Table Row</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-table--table-row">
          table row
        </a> component.
      </p>
    </div>
    <KTableRow {...props}>
      Table Row Content
    </KTableRow>
    <CodeViewer>
      {`
  <k-table-row
    type="${props.type}"
  >
    Table Row Content
  </k-table-row>
      `}
    </CodeViewer>
  </div>
);

export const TableRow = Template.bind({});
TableRow.args = {
  type: 'default',
};
TableRow.argTypes = {
  type: {
    options: ['default', 'header', 'navbar'],
    control: { type: 'select' }
  }
};