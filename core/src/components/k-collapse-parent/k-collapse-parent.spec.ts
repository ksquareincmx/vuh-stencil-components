import { newSpecPage } from '@stencil/core/testing';
import { KCollapseParent } from './k-collapse-parent';

describe('k-collapse-parent', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [KCollapseParent],
      html: '<k-collapse-parent></k-collapse-parent>'
    });
    expect(root).toEqualHtml(`
      <k-collapse-parent id="kCollapseParent">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-collapse-parent>
    `);
  });
});
