import React from 'react';
import { KImg } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import '../../styles/stories.css';

export default {
  title: 'Components/Image',
  component: 'k-img',
  argTypes: {
    fit: {
      options: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      control: { type: 'select' }
    },
  }
};

const defaultArgs = {
  src: 'https://media-exp1.licdn.com/dms/image/C4E1BAQGOhOLNnmDazw/company-background_10000/0?e=2159024400&v=beta&t=FLPdAgxuIRlNgMSoohrTA6Meg5SzkPIuNV_qauRDP0Q',
  alt: 'the-ksquare-group',
  height: 300,
  fit: 'cover'
};

const Template = (props) => (
  <div className="story-container">
    <h1>Image</h1>
    <hr />
    <div className="story-description">
      <p>
        Simple image component with properties that made easy to fit on other components.
      </p>
    </div>
    <KImg {...props} />
    <CodeViewer>
      {`
  <k-img
    src="${props.src}"
    alt="${props.alt}"
    height="${props.height}"
    fit="${props.fit}"
  >
  </k-img>
      `}
    </CodeViewer>
  </div>
);

export const Image = Template.bind({});
Image.args = {...defaultArgs};