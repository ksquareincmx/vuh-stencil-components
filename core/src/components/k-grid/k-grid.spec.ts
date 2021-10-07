import { newSpecPage } from '@stencil/core/testing';
import { Grid } from './k-grid';

describe('k-grid', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [Grid],
      html: '<k-grid></k-grid>'
    });
    expect(root).toEqualHtml(`
      <k-grid class="KGrid">
        <mock:shadow-root>
            <slot></slot>
        </mock:shadow-root>
      </k-grid>
    `);
  });

  it('should be fluid', async () => {
    const { root } = await newSpecPage({
      components: [Grid],
      html: '<k-grid fluid="true"></k-grid>'
    });
    expect(root).toEqualHtml(`
      <k-grid class="KGrid KGrid--fluid" fluid="true">
        <mock:shadow-root>
            <slot></slot>
        </mock:shadow-root>
      </k-grid>
    `);
  });
});
