import { newSpecPage } from '@stencil/core/testing';
import { Column } from './k-column';

describe('k-column', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [Column],
      html: '<k-column></k-column>'
    });
    expect(root).toEqualHtml(`
      <k-column class="KColumn">
        <mock:shadow-root>
            <div class="KColumn-content">
            <slot></slot>
            </div>
        </mock:shadow-root>
      </k-column>
    `);
  });

  it('should have an specified size', async () => {
    const { root } = await newSpecPage({
      components: [Column],
      html: '<k-column size="1"></k-column>'
    });
    expect(root).toEqualHtml(`
      <k-column class="KColumn KColumn--col-1" size="1">
        <mock:shadow-root>
            <div class="KColumn-content">
            <slot></slot>
            </div>
        </mock:shadow-root>
      </k-column>
      `);
  });

  it('should have at least two specified sizes', async () => {
    const { root } = await newSpecPage({
      components: [Column],
      html: '<k-column size="1" sizeMd="5"></k-column>'
    });
    expect(root).toEqualHtml(`
      <k-column class="KColumn KColumn--col-1 KColumn--col-md-5" size="1" sizemd="5">
        <mock:shadow-root>
            <div class="KColumn-content">
            <slot></slot>
            </div>
        </mock:shadow-root>
      </k-column>
      `);
  });
});
