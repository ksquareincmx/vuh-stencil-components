import React from 'react';
import { KCarousel, KCarouselItem, KImg } from '../../../component-library-react/src/components';
import CodeViewer from '../../utils/CodeViewer.jsx';
import { imgInterface } from '../../types';
import '../../styles/stories.css';

export default {
  title: 'Components/Carousel',
  component: 'k-carousel'
}

const itemsList: imgInterface[] = [
  {
    src: 'https://cdn.pixabay.com/photo/2019/11/03/01/56/landscape-4597742_1280.jpg',
    height: 300,
    fit: 'cover'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2020/07/09/10/31/sea-5386810_1280.jpg',
    height: 300,
    fit: 'cover'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2019/11/03/01/56/landscape-4597742_1280.jpg',
    height: 300,
    fit: 'cover'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2020/07/09/10/31/sea-5386810_1280.jpg',
    height: 300,
    fit: 'cover'
  }
]

const renderItems = (props: imgInterface) => (
  <KCarouselItem>
    <KImg {...props} />
  </KCarouselItem>
)

const Template = (props) => (
  <div className="story-container">
    <h1>Carousel</h1>
    <hr />
    <div className="story-description">
      <p>
      The carousel will behave only from left to right
      and vice versa. You will have a maximum of 4
      extra cards apart from the three that must
      always be shown. On the web, it will only move
      by clicking the arrows. In the other devices,
      the behavior will be by giving swipe.
      </p>
    </div>
    <KCarousel {...props}>
      {itemsList.map((data: imgInterface) => renderItems(data))}
    </KCarousel>
    <CodeViewer>
      {`
  <k-carousel style="height: 300px;" show-dots="${props.showDots}">
    <k-carousel-item>
      <k-img
        src="https://cdn.pixabay.com/photo/2019/11/03/01/56/landscape-4597742_1280.jpg"
        fit="cover"
        height="300"
      ></k-img>
    </k-carousel-item>
    <k-carousel-item>
      <k-img
        src="https://cdn.pixabay.com/photo/2020/07/09/10/31/sea-5386810_1280.jpg"
        fit="cover"
        height="300"
      ></k-img>
    </k-carousel-item>
    <k-carousel-item>
      <k-img
        src="https://cdn.pixabay.com/photo/2019/11/03/01/56/landscape-4597742_1280.jpg"
        fit="cover"
        height="300"
      ></k-img>
    </k-carousel-item>
    <k-carousel-item>
      <k-img
        src="https://cdn.pixabay.com/photo/2020/07/09/10/31/sea-5386810_1280.jpg"
        fit="cover"
        height="300"
      ></k-img>
    </k-carousel-item>
  </k-carousel>
      `}
    </CodeViewer>
  </div>
);

export const Carousel = Template.bind({});
Carousel.args = {
  showDots: true
}