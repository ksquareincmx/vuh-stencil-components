import { newSpecPage } from '@stencil/core/testing';
import { Card } from './k-card';

describe('k-card', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [Card],
      html: '<k-card></k-card>'
    });

    expect(root).toEqualHtml(`
      <k-card class="KCard">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-card>
    `);
  });
});
