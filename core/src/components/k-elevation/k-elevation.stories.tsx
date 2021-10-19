import React from 'react';
import { KElevation } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

import './preview.css';

export default {
  title: 'Components/Elevation',
  component: 'k-elevation'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Elevation</h1>
    <hr />
    <KElevation {...props}>
      <div>
        Elevation
      </div>
    </KElevation>
    <CodeViewer>
      {`
  <k-elevation radius="${props.radius}">
    <div style="
      height: 200px;
      width: 200px;
      display: flex;
      justify-content:center;
      align-items: center;
    ">
      Elevation
    </div>
  </k-elevation>
      `}
    </CodeViewer>
  </div>
);

export const Elevation = Template.bind({});
Elevation.args = { radius: '50%' };