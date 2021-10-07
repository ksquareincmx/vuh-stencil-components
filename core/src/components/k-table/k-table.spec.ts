import { newSpecPage } from '@stencil/core/testing';
import { Table } from './k-table';

describe('k-table', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [Table],
      html: '<k-table></k-table>'
    });
    expect(root).toEqualHtml(`
      <k-table class="KTable">
        <mock:shadow-root>
          <div class="KTable-navbar">
            <slot name="navbar"></slot>
          </div>
          <div class="KTable-container">
            <div class="KTable-wrapper" style="--data-count: 0;">
                <slot></slot>
            </div>
          </div>
        </div>
        </mock:shadow-root>
      </k-table>
    `);
  });
});
