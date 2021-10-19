import React from 'react';
import { KCarouselItem, KImg } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import { imgInterface } from '../../types';
import '../../styles/stories.css';

const imgProps: imgInterface = {
  src: 'https://cdn.pixabay.com/photo/2019/11/03/01/56/landscape-4597742_1280.jpg',
  alt: 'the-ksquare-group',
  height: 300,
  fit: 'cover'
};

export default {
  title: 'Components/Carousel',
  component: 'k-carousel-item',
  parameters: {
    controls: { hideNoControlsWarning: true },
  }
}

const Template = () => (
  <div className="story-container">
    <h1>Carousel Item</h1>
    <hr />
    <KCarouselItem>
      <KImg {...imgProps} />
    </KCarouselItem>
    <CodeViewer>
      {`
  <k-carousel-item>
    <k-img
      style="width: 100%;"
      src="https://cdn.pixabay.com/photo/2019/11/03/01/56/landscape-4597742_1280.jpg"
    ></k-img>
  </k-carousel-item>
      `}
    </CodeViewer>
  </div>
);


export const CarouselItem = Template.bind({});
