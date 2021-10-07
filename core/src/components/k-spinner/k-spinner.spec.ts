import { newSpecPage } from '@stencil/core/testing';
import { Spinner } from './k-spinner';

describe('k-spinner', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [Spinner],
      html: '<k-spinner></k-spinner>'
    });

    expect(root).toEqualHtml(`
      <k-spinner>
        <mock:shadow-root>
          <div class="KSpinner" style="height: 50px; width: 50px;">
            <div class="KSpinner-before" style="height: 50px; border-width:6px 0 6px 6px;"></div>
            <div class="KSpinner-after" style="height: 50px; border-width:6px 6px 6px 0;"></div>
          </div>
        </mock:shadow-root> 
      </k-spinner>
    `);
  });

  it('size should be "60"', async () => {
    const { root } = await newSpecPage({
      components: [Spinner],
      html: '<k-spinner size="60"></k-spinner>'
    });

    expect(root).toEqualHtml(`
      <k-spinner size="60">
        <mock:shadow-root>
          <div class="KSpinner" style="height: 60px; width: 60px;">
            <div class="KSpinner-before" style="height: 60px; border-width:6px 0 6px 6px;"></div>
            <div class="KSpinner-after" style="height: 60px; border-width:6px 6px 6px 0;"></div>
          </div>
        </mock:shadow-root> 
      </k-spinner>
    `);
  });

  it('strong should be "8"', async () => {
    const { root } = await newSpecPage({
      components: [Spinner],
      html: '<k-spinner strong="8"></k-spinner>'
    });

    expect(root).toEqualHtml(`
      <k-spinner strong="8">
        <mock:shadow-root>
          <div class="KSpinner" style="height: 50px; width: 50px;">
            <div class="KSpinner-before" style="height: 50px; border-width:8px 0 8px 8px;"></div>
            <div class="KSpinner-after" style="height: 50px; border-width:8px 8px 8px 0;"></div>
          </div>
        </mock:shadow-root> 
      </k-spinner>
    `);
  });

  it('color should be "primary"', async () => {
    const { root } = await newSpecPage({
      components: [Spinner],
      html: '<k-spinner color="primary"></k-spinner>'
    });

    expect(root).toEqualHtml(`
      <k-spinner color="primary">
        <mock:shadow-root>
          <div class="KSpinner" style="height: 50px; width: 50px;">
            <div class="KSpinner-before primary" style="height: 50px; border-width:6px 0 6px 6px;"></div>
            <div class="KSpinner-after primary" style="height: 50px; border-width:6px 6px 6px 0;"></div>
          </div>
        </mock:shadow-root> 
      </k-spinner>
    `);
  });
});
