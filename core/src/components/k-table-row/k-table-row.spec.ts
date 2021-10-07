import { newSpecPage } from '@stencil/core/testing';
import { TableRow } from './k-table-row';

describe('k-table-row', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [TableRow],
      html: '<k-table-row></k-table-row>'
    });
    expect(root).toEqualHtml(`
      <k-table-row class="KTableRow">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-table-row>
    `);
  });

  it('should be type header', async () => {
    const { root } = await newSpecPage({
      components: [TableRow],
      html: '<k-table-row type="header"></k-table-row>'
    });
    expect(root).toEqualHtml(`
      <k-table-row class="KTableRow KTableRow-border" type="header">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-table-row>
    `);
  });

  it('should be type navbar', async () => {
    const { root } = await newSpecPage({
      components: [TableRow],
      html: '<k-table-row type="navbar"></k-table-row>'
    });
    expect(root).toEqualHtml(`
      <k-table-row class="KTableRow" type="navbar">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-table-row>
    `);
  });
});
