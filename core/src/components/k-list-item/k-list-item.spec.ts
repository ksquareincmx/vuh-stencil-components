import { newSpecPage } from '@stencil/core/testing';
import { ListItem } from './k-list-item';

describe('k-list-item', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [ListItem],
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
