import React from 'react';
import { KSpinner } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Spinner',
  component: 'k-spinner'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Spinner</h1>
    <hr />
    <div className="story-description">
      <p>
      </p>
    </div>
    <KSpinner {...props}/>
    <CodeViewer>
      {`
  <k-spinner 
    size="${props.size}"
    strong="${props.strong}"
    color="${props.color}"
  >
  </k-dialog>
      `}
    </CodeViewer>
  </div>
);

export const Spinner = Template.bind({});
Spinner.args = {
  size: 50,
  strong: 6,
  color: 'primary'
};