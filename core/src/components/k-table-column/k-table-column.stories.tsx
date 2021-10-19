import React from 'react';
import { KTableColumn } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Table',
  component: 'k-table-column'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Table Column</h1>
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
    <KTableColumn {...props}>
      Column content
    </KTableColumn>
    <CodeViewer>
      {`
  <k-table-column>
    Column content
  </k-table-column>
      `}
    </CodeViewer>
  </div>
);

export const TableColumn = Template.bind({});
TableColumn.args = {
  size: '1'
};