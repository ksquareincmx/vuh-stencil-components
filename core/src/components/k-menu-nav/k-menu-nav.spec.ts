import { newSpecPage } from '@stencil/core/testing';
import { KMenuNav } from './k-menu-nav';

describe('k-menu-nav', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [KMenuNav],
      html: '<k-menu-nav></k-menu-nav>'
    });

    expect(root).toEqualHtml(`
      <k-menu-nav id="kMenuNav">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-menu-nav>
    `);
  });
});
