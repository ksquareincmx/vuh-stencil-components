import { newSpecPage } from '@stencil/core/testing';
import { KTableColumn } from './k-table-column';

describe('k-table-column', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [KTableColumn],
      html: '<k-table-column></k-table-column>'
    });
    expect(root).toEqualHtml(`
      <k-table-column>
        <mock:shadow-root>
          <div class="KTableColumn-content">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </k-table-column>
    `);
  });

  it('should render with props', async () => {
    const { root } = await newSpecPage({
      components: [KTableColumn],
      html: '<k-table-column size="3"></k-table-column>'
    });
    expect(root).toEqualHtml(`
      <k-table-column size="3" class="KTableColumn KTableColumn--col-3">
        <mock:shadow-root>
          <div class="KTableColumn-content">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </k-table-column>
    `);
  });
});