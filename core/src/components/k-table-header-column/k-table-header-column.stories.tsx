import React from 'react';
import { KTableHeaderColumn } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Table',
  component: 'k-table-header-column'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Table Header Column</h1>
    <hr />
    <div className="story-description">
      <p>
        This component was made to be used
        on <a href="/?path=/story/components-table--table-row">
          table row
        </a> component
        inside of <a href="/?path=/story/components-table--table">
          table
        </a> component.
      </p>
    </div>
    <KTableHeaderColumn {...props}>
      Header Column Content
    </KTableHeaderColumn>
    <CodeViewer>
      {`
  <k-table-header-column
    size="${props.size}"
    disabled="${props.disabled}"
    sortable="${props.sortable}"
    default="${props.default}"
    active="${props.active}"
  >
    Header Column Content
  </k-table-header-column>
      `}
    </CodeViewer>
  </div>
);

export const TableHeaderColumn = Template.bind({});
TableHeaderColumn.args = {
  size: '1',
  disabled: false,
  sortable: true,
  default: false,
  active: false
};