import { newSpecPage } from '@stencil/core/testing';
import { BannerText } from './k-banner-text';

describe('k-banner-text', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [BannerText],
      html: '<k-banner-text></k-banner-text>'
    });

    expect(root).toEqualHtml(`
      <k-banner-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-banner-text>
    `);
  });
});
