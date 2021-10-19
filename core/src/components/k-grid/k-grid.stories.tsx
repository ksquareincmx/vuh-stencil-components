import React from 'react';
import { KGrid, KRow, KColumn } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';
import './preview.css';

export default {
  title: 'Components/Grid',
  component: 'k-grid',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
};

const Template = (props) => (
  <div className="story-container">
    <h1>Grid</h1>
    <hr />
    <div className="story-description">
      <p>
        
      </p>
    </div>
    <KGrid {...props}>
        <KRow>
          <KColumn size='2'>
            <p>Column (size 2)</p>
          </KColumn>
          <KColumn sizesm='3'>
            <p>Column (sizeSm 3)</p>
          </KColumn>
          <KColumn sizemd='5' sizelg='7'>
            <p>Column (sizeMd 5, sizeLg 7)</p>
          </KColumn>
          <KColumn sizemd='6'>
            <p>Column (sizeMd 6)</p>
          </KColumn>
        </KRow>
  
        <KRow spacing="sm">
          <KColumn size='1'>
            <p>Column (size 1)</p>
          </KColumn>
          <KColumn size='1'>
            <p>Column (size 1)</p>
          </KColumn>
          <KColumn size='1'>
            <p>Column (size 1)</p>
          </KColumn>
          <KColumn size='1'>
            <p>Column (size 1)</p>
          </KColumn>
          <KColumn size='1'>
            <p>Column (size 1)</p>
          </KColumn>
          <KColumn size='1'>
            <p>Column (size 1)</p>
          </KColumn>
          <KColumn size='1'>
            <p>Column (size 1)</p>
          </KColumn>
          <KColumn size='1'>
            <p>Column (size 1)</p>
          </KColumn>
          <KColumn size='1'>
            <p>Column (size 1)</p>
          </KColumn>
          <KColumn size='1'>
            <p>Column (size 1)</p>
          </KColumn>
          <KColumn size='1'>
            <p>Column (size 1)</p>
          </KColumn>
          <KColumn size='1'>
            <p>Column (size 1)</p>
          </KColumn>
        </KRow>
    </KGrid>
    <CodeViewer>
      {`
  <k-grid>
    <k-row>
      <k-column size="2">
        <p style="background-color: rgb(214, 214, 214); margin: 0;">Column (size 2)</p>
      </k-column>
      <k-column sizesm="3">
        <p style="background-color: rgb(214, 214, 214); margin: 0;">Column (sizeSm 3)</p>
      </k-column>
      <k-column sizemd="5" sizelg="7">
        <p style="background-color: rgb(214, 214, 214); margin: 0;">Column (sizeMd 5, sizeLg 7)</p>
      </k-column>
      <k-column sizemd="6">
        <p style="background-color: rgb(214, 214, 214); margin: 0;">Column (sizeMd 6)</p>
      </k-column>
    </k-row>
    <k-row spacing="sm">
      <k-column size="1">
        <p style="background-color: rgb(214, 214, 214); margin: 0;">Column (size 1)</p>
      </k-column>
      <k-column size="1">
        <p style="background-color: rgb(214, 214, 214); margin: 0;">Column (size 1)</p>
      </k-column>
      <k-column size="1">
        <p style="background-color: rgb(214, 214, 214); margin: 0;">Column (size 1)</p>
      </k-column>
      <k-column size="1">
        <p style="background-color: rgb(214, 214, 214); margin: 0;">Column (size 1)</p>
      </k-column>
      <k-column size="1">
        <p style="background-color: rgb(214, 214, 214); margin: 0;">Column (size 1)</p>
      </k-column>
      <k-column size="1">
        <p style="background-color: rgb(214, 214, 214); margin: 0;">Column (size 1)</p>
      </k-column>
      <k-column size="1">
        <p style="background-color: rgb(214, 214, 214); margin: 0;">Column (size 1)</p>
      </k-column>
      <k-column size="1">
        <p style="background-color: rgb(214, 214, 214); margin: 0;">Column (size 1)</p>
      </k-column>
      <k-column size="1">
        <p style="background-color: rgb(214, 214, 214); margin: 0;">Column (size 1)</p>
      </k-column>
      <k-column size="1">
        <p style="background-color: rgb(214, 214, 214); margin: 0;">Column (size 1)</p>
      </k-column>
    </k-row>
  </k-grid>
      `}
    </CodeViewer>
  </div>
);

export const Grid = Template.bind({});