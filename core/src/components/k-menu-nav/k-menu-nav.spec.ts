import { newSpecPage } from '@stencil/core/testing';
import { MenuNav } from './k-menu-nav';

describe('k-menu-nav', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [MenuNav],
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
