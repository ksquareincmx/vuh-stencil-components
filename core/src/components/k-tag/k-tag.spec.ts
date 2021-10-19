import { newSpecPage } from '@stencil/core/testing';
import { Tag } from './k-tag';

describe('k-tag', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Tag],
      html: '<k-tag></k-tag>'
    });

    expect(root).toEqualHtml(`
      <k-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-tag>
    `);
  });
});
