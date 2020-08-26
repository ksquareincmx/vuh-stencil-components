import { newSpecPage } from '@stencil/core/testing';
import { KRow } from './k-row';

describe('k-row', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [KRow],
      html: '<k-row></k-row>'
    });
    expect(root).toEqualHtml(`
      <k-row class="KRow">
        <mock:shadow-root>
            <slot></slot>
        </mock:shadow-root>
      </k-row>
    `);
  });

  it('should have an specified spacing', async () => {
    const { root } = await newSpecPage({
      components: [KRow],
      html: '<k-row spacing="xs"></k-row>'
    });
    expect(root).toEqualHtml(`
      <k-row class="KRow KRow--spacing-xs" spacing="xs">
        <mock:shadow-root>
            <slot></slot>
        </mock:shadow-root>
      </k-row>
    `);
  });
});
