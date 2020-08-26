import { newSpecPage } from '@stencil/core/testing';
import { KMenuContent } from './k-menu-content';

describe('k-menu-content', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [KMenuContent],
      html: '<k-menu-content></k-menu-content>'
    });

    expect(root).toEqualHtml(`
      <k-menu-content id="kMenuContent" class="KMenuContent">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-menu-content>
    `);
  });
});
