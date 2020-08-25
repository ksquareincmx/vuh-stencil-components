import { newSpecPage } from '@stencil/core/testing';
import { KCollapseList } from './k-collapse-list';

describe('k-collapse-list', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [KCollapseList],
      html: '<k-collapse-list></k-collapse-list>'
    });

    expect(root).toEqualHtml(`
      <k-collapse-list id="kCollapseList" class="KCollapseList">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-collapse-list>
    `);
  });
});
