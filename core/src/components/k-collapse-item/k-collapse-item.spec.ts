import { newSpecPage } from '@stencil/core/testing';
import { CollapseItem } from './k-collapse-item';

describe('k-collapse-item', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [CollapseItem],
      html: '<k-collapse-item></k-collapse-item>'
    });

    expect(root).toEqualHtml(`
      <k-collapse-item class="KCollapseItem">
        <mock:shadow-root>
          <button class="KCollapseItem-button">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </k-collapse-item>
    `);
  });

  it('item should be disabled', async () => {
    const { root } = await newSpecPage({
      components: [CollapseItem],
      html: '<k-collapse-item disabled></k-collapse-item>'
    });

    expect(root).toEqualHtml(`
      <k-collapse-item class="KCollapseItem" disabled>
        <mock:shadow-root>
          <button class="KCollapseItem-button" disabled>
            <slot></slot>
          </button>
        </mock:shadow-root>
      </k-collapse-item>
    `);
  });
});
