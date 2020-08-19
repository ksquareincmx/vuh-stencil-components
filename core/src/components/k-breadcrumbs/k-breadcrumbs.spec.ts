import { newSpecPage } from '@stencil/core/testing';
import { KBreadcrumbs } from './k-breadcrumbs';

describe('k-breadcrumbs', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [KBreadcrumbs],
      html: '<k-breadcrumbs></k-breadcrumbs>'
    });

    expect(root).toEqualHtml(`
      <k-breadcrumbs class="KBreadcrumbs">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-breadcrumbs>
    `);
  });
});
