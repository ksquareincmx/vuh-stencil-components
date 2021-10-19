import { newSpecPage } from '@stencil/core/testing';
import { CarouselItem } from './k-carousel-item';

describe('k-carousel-item', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [CarouselItem],
      html: '<k-carousel-item></k-carousel-item>'
    });

    expect(root).toEqualHtml(`
      <k-carousel-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-carousel-item>
    `);
  });
});
