import { newSpecPage } from '@stencil/core/testing';
import { KListItem } from './k-list-item';

describe('k-list-item', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [KListItem],
      html: '<k-list-item></k-list-item>'
    });

    expect(root).toEqualHtml(`
      <k-list-item>
        <mock:shadow-root>
          <li class="KListItem">
            <slot></slot>
          </li>
        </mock:shadow-root>
      </k-list-item>
    `);
  });
});
