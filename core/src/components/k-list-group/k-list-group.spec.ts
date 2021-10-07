import { newSpecPage } from '@stencil/core/testing';
import { ListGroup } from './k-list-group';

describe('k-list-group', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [ListGroup],
      html: '<k-list-group></k-list-group>'
    });

    expect(root).toEqualHtml(`
      <k-list-group>
        <mock:shadow-root>
          <ul class="KListGroup">
            <slot></slot>
          </ul>
        </mock:shadow-root>
      </k-list-group>
    `);
  });
});
