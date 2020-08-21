import { newSpecPage } from '@stencil/core/testing';
import { KTable } from './k-table';

describe('k-table', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [KTable],
      html: '<k-table></k-table>'
    });
    expect(root).toEqualHtml(`
      <k-table>
        <mock:shadow-root>
          <div class="KTable-navbar">
            <slot name="navbar"></slot>
          </div>
          <div class="KTable-container">
            <div class="KTable-wrapper">
                <slot></slot>
            </div>
          </div>
        </div>
        </mock:shadow-root>
      </k-table>
    `);
  });
});
