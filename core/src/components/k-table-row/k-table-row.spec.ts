import { newSpecPage } from '@stencil/core/testing';
import { KTableRow } from './k-table-row';

describe('k-table-row', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [KTableRow],
      html: '<k-table-row></k-table-row>'
    });
    expect(root).toEqualHtml(`
      <k-table-row>
        <mock:shadow-root>
          <slot>
            Default
          </slot>
        </mock:shadow-root>
      </k-table-row>
    `);
  });

  it('should be type header', async () => {
    const { root } = await newSpecPage({
      components: [KTableRow],
      html: '<k-table-row></k-table-row>'
    });
    expect(root).toEqualHtml(`
      <k-table-row type="header" class="KTableRow KTableRow-border">
        <mock:shadow-root>
          <slot>
            Default
          </slot>
        </mock:shadow-root>
      </k-table-row>
    `);
  });

  it('should be type navbar', async () => {
    const { root } = await newSpecPage({
      components: [KTableRow],
      html: '<k-table-row></k-table-row>'
    });
    expect(root).toEqualHtml(`
      <k-table-row type="navbar" slot="navbar" class="KTableRow">
        <mock:shadow-root>
          <slot>
            Default
          </slot>
        </mock:shadow-root>
      </k-table-row>
    `);
  });
});
