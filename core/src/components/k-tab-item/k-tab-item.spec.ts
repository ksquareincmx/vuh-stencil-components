import { newSpecPage } from '@stencil/core/testing';
import { TabItem } from './k-tab-item';

describe('k-tab-item', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [TabItem],
      html: '<k-tab-item></k-tab-item>'
    });

    expect(root).toEqualHtml(`
      <k-tab-item>
        <mock:shadow-root>
          <button class="KTabItem">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </k-tab-item>
    `);
  });

  it('should be disabled', async () => {
    const { root } = await newSpecPage({
      components: [TabItem],
      html: '<k-tab-item disabled></k-tab-item>'
    });

    expect(root).toEqualHtml(`
      <k-tab-item disabled>
        <mock:shadow-root>
          <button class="KTabItem" disabled>
            <slot></slot>
          </button>
        </mock:shadow-root>
      </k-tab-item>
    `);
  });

  it('should be current', async () => {
    const { root } = await newSpecPage({
      components: [TabItem],
      html: '<k-tab-item current></k-tab-item>'
    });

    expect(root).toEqualHtml(`
      <k-tab-item current>
        <mock:shadow-root>
          <button class="KTabItem is-active">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </k-tab-item>
    `);
  });
});
