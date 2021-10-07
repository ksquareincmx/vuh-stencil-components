import { newSpecPage } from '@stencil/core/testing';
import { CollapseMenu } from './k-collapse-menu';

describe('k-collapse-menu', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [CollapseMenu],
      html: '<k-collapse-menu></k-collapse-menu>'
    });

    expect(root).toEqualHtml(`
      <k-collapse-menu class="KCollapseMenu">
        <mock:shadow-root></mock:shadow-root>
      </k-collapse-menu>
    `);
  });
});
