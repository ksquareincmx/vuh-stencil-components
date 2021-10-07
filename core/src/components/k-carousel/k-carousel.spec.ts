import { newSpecPage } from '@stencil/core/testing';
import { Carousel } from './k-carousel';

describe('k-carousel', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [Carousel],
      html: '<k-carousel></k-carousel>'
    });

    expect(root).toEqualHtml(`
      <k-carousel class="KCarousel">
        <mock:shadow-root>
          <div class="KCarousel-container">
            <div class="KCarousel-slides" style="transition: 600ms;">
              <slot></slot>
            </div>
          </div>
          <div class="KCarousel-dots"></div>
        </mock:shadow-root>
      </k-carousel>
    `);
  });

  it('dots should be hidden', async () => {
    const { root } = await newSpecPage({
      components: [Carousel],
      html: '<k-carousel show-dots="false"></k-carousel>'
    });

    expect(root).toEqualHtml(`
      <k-carousel class="KCarousel" show-dots="false">
        <mock:shadow-root>
          <div class="KCarousel-container">
            <div class="KCarousel-slides" style="transition: 600ms;">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
      </k-carousel>
    `);
  });

  it('transition should be 1000', async () => {
    const { root } = await newSpecPage({
      components: [Carousel],
      html: '<k-carousel transition-duration="1000"></k-carousel>'
    });

    expect(root).toEqualHtml(`
      <k-carousel class="KCarousel" transition-duration="1000">
        <mock:shadow-root>
          <div class="KCarousel-container">
            <div class="KCarousel-slides" style="transition: 1000ms;">
              <slot></slot>
            </div>
          </div>
          <div class="KCarousel-dots"></div>
        </mock:shadow-root>
      </k-carousel>
    `);
  });
});
