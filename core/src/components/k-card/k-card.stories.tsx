import React from 'react';
import { KCard, KImg } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import { imgInterface } from '../../types';
import '../../styles/stories.css';

export default {
  title: 'Components/Card',
  component: 'k-card',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
}

const imgProps: imgInterface = {
  src: 'https://cdn.pixabay.com/photo/2017/08/10/08/47/code-2620118_1280.jpg',
  alt: 'the-ksquare-group',
  height: 300,
  fit: 'cover'
};

const Template = () => (
  <div className="story-container">
    <h1>Card</h1>
    <hr />
    <div className="story-description">
      <p>
        Example places where the Normal card can go:
      </p>
      <p>
        Home, Courses, Learning plans, My learning, Certificated End.
      </p>
    </div>
    <KCard>
    <KImg {...imgProps}></KImg>
      <div style={{padding: '16px'}}>
        <h1>Card Title</h1>
        <p style={{color: '#0a0a0a'}}>
          Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit.
        </p>
      </div>
    </KCard>
    <CodeViewer>
      {`
  <k-card>
    <k-img
      src="https://cdn.pixabay.com/photo/2017/08/10/08/47/code-2620118_1280.jpg"
      alt="the-ksquare-group"
      height="300"
      fit="cover"
    >
    </k-img>
    <div style="padding: 1em;">
      <h1>Card Title</h1>
      <p style="color: #0a0a0a;">
        Lorem ipsum dolor sit amet, consectetuer
        adipiscing elit.
      </p>
    </div>
  </k-card>
      `}
    </CodeViewer>
  </div>
);

export const Card = Template.bind({});
