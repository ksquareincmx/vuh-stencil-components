import React from 'react';
import {
  KTable,
  KTableRow,
  KTableColumn,
  KTypography,
  KDropdown,
  KDropdownItem,
  KPaginator,
  KTableHeaderColumn
} from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Table',
  component: 'k-table',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};

const Template = () => (
  <div className="story-container">
    <h1>Table</h1>
    <hr />
    <div className="story-description">
      <p>
      </p>
    </div>
    <KTable>
      <KTableRow type="navbar" style={{minHeight: '56px'}}>
        <KTableColumn size="6" style={{height: '100%'}}>
          <KTypography variant="h4" style={{color: 'black'}}>
            Displaying Course Status
          </KTypography>
        </KTableColumn>
        <KTableColumn size="1" style={{height: '100%'}}>
          <KDropdown variant="table" label="Row" style={{height: '100%'}}>
            <KDropdownItem name="opt" value="01">25</KDropdownItem>
            <KDropdownItem name="opt" value="02">50</KDropdownItem>
            <KDropdownItem name="opt" value="03">100</KDropdownItem>
          </KDropdown>
        </KTableColumn>
        <KTableColumn size="3" style={{height: '100%'}}>
          <KPaginator current-page={1} total-pages={17}/>
        </KTableColumn>
      </KTableRow>
      <KTableRow type="header">
        <KTableHeaderColumn size='3' default={true}>
          Hello there
        </KTableHeaderColumn>
        <KTableHeaderColumn size='1' sortable={false}>
          Hello there
        </KTableHeaderColumn>
        <KTableHeaderColumn size='1'>
          Hello there
        </KTableHeaderColumn>
        <KTableHeaderColumn size='1'>
          Hello there
        </KTableHeaderColumn>
        <KTableHeaderColumn size='1'>
          Hello there
        </KTableHeaderColumn>
        <KTableHeaderColumn size='1'>
          Hello there
        </KTableHeaderColumn>
        <KTableHeaderColumn size='1'>
          Hello there
        </KTableHeaderColumn>
        <KTableHeaderColumn size='1'>
          Hello there
        </KTableHeaderColumn>
        <KTableHeaderColumn size='1'>
          Hello there
        </KTableHeaderColumn>
        <KTableHeaderColumn size='1'>
          Hello there
        </KTableHeaderColumn>
      </KTableRow>
      <KTableRow>
        <KTableColumn size='3'>
          General Kenobi
        </KTableColumn>
        <KTableColumn size='1'>
          General Kenobi
        </KTableColumn>
        <KTableColumn size='1'>
          General Kenobi
        </KTableColumn>
        <KTableColumn size='1'>
          General Kenobi
        </KTableColumn>
        <KTableColumn size='1'>
          General Kenobi
        </KTableColumn>
        <KTableColumn size='1'>
          General Kenobi
        </KTableColumn>
        <KTableColumn size='1'>
          General Kenobi
        </KTableColumn>
        <KTableColumn size='1'>
          General Kenobi
        </KTableColumn>
        <KTableColumn size='1'>
          General Kenobi
        </KTableColumn>
        <KTableColumn size='1'>
          General Kenobi
        </KTableColumn>
      </KTableRow>
      <KTableRow>
        <KTableColumn size='3'>
          You are a bold one!
        </KTableColumn>
        <KTableColumn size='1'>
          You are a bold one!
        </KTableColumn>
        <KTableColumn size='1'>
          You are a bold one!
        </KTableColumn>
        <KTableColumn size='1'>
          You are a bold one!
        </KTableColumn>
        <KTableColumn size='1'>
          You are a bold one!
        </KTableColumn>
        <KTableColumn size='1'>
          You are a bold one!
        </KTableColumn>
        <KTableColumn size='1'>
          You are a bold one!
        </KTableColumn>
        <KTableColumn size='1'>
          You are a bold one!
        </KTableColumn>
        <KTableColumn size='1'>
          You are a bold one!
        </KTableColumn>
        <KTableColumn size='1'>
          You are a bold one!
        </KTableColumn>
      </KTableRow>
    </KTable>
    <CodeViewer>
      {`
  <k-table>
    <k-table-row type="navbar" style="min-height: 56px;">
      <k-table-column size="6" style="height: 100%;">
        <k-typography variant="h4" style="color: black;">Displaying Course Status</k-typography>
      </k-table-column>
      <k-table-column size="1" style="height: 100%;">
        <k-dropdown variant="table" label="Row" style="height: 100%;">
          <k-dropdown-item name="op1" value="01">25</k-dropdown-item>
          <k-dropdown-item name="op2" value="02">100</k-dropdown-item>
          <k-dropdown-item name="op3" value="03">250</k-dropdown-item>
        </k-dropdown>
      </k-table-column>
      <k-table-column size="3" style="height: 100%;">
        <k-paginator current-page="1" total-pages="17"></k-paginator>
      </k-table-column>
    </k-table-row>
    <k-table-row type="header">
      <k-table-header-column size="3" default="true">Hello there</k-table-header-column>
      <k-table-header-column size="1" sortable="false">Hello there</k-table-header-column>
      <k-table-header-column size="1">Hello there</k-table-header-column>
      <k-table-header-column size="1">Hello there</k-table-header-column>
      <k-table-header-column size="1">Hello there</k-table-header-column>
      <k-table-header-column size="1" disabled="true">Hello there</k-table-header-column>
      <k-table-header-column size="1">Hello there</k-table-header-column>
      <k-table-header-column size="1">Hello there</k-table-header-column>
      <k-table-header-column size="1" disabled="true">Hello there</k-table-header-column>
      <k-table-header-column size="1">Hello there</k-table-header-column>
    </k-table-row>
    <k-table-row>
      <k-table-column size="3">General Kenobi.</k-table-column>
      <k-table-column size="1">General Kenobi.</k-table-column>
      <k-table-column size="1">General Kenobi.</k-table-column>
      <k-table-column size="1">General Kenobi.</k-table-column>
      <k-table-column size="1">General Kenobi.</k-table-column>
      <k-table-column size="1">General Kenobi.</k-table-column>
      <k-table-column size="1">General Kenobi.</k-table-column>
      <k-table-column size="1">General Kenobi.</k-table-column>
      <k-table-column size="1">General Kenobi.</k-table-column>
      <k-table-column size="1">General Kenobi.</k-table-column>
    </k-table-row>
    <k-table-row>
      <k-table-column size="3">You are a bold one!</k-table-column>
      <k-table-column size="1">You are a bold one!</k-table-column>
      <k-table-column size="1">You are a bold one!</k-table-column>
      <k-table-column size="1">You are a bold one!</k-table-column>
      <k-table-column size="1">You are a bold one!</k-table-column>
      <k-table-column size="1">You are a bold one!</k-table-column>
      <k-table-column size="1">You are a bold one!</k-table-column>
      <k-table-column size="1">You are a bold one!</k-table-column>
      <k-table-column size="1">You are a bold one!</k-table-column>
      <k-table-column size="1">You are a bold one!</k-table-column>
    </k-table-row>
  </k-table>
      `}
    </CodeViewer>
  </div>
);

export const Table = Template.bind({});
