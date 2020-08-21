import { newSpecPage } from '@stencil/core/testing';
import { KTableHeaderColumn } from './k-table-header-column';

describe('k-table-header-column', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [KTableHeaderColumn],
      html: '<k-table-header-column></k-table-header-column>'
    });
    expect(root).toEqualHtml(`
      <k-table-header-column>
        <mock:shadow-root>
          <div class="KTableColumn-content">
            <div class="KTableHeaderColumn-text">
              <slot></slot>
            </div>
            <div class="KTableHeaderColumn-icon">
              <i class="vuh-swap-vert-up"></i>
              <i class="vuh-swarp-vert-down"></i>
            </div>
          </div>
          <div class="KTableHeaderColumn-floating-text">
          </div>
        </mock:shadow-root>
      </k-table-header-column>
    `);
  });

  it('should be disabled', async () => {
    const { root } = await newSpecPage({
      components: [KTableHeaderColumn],
      html: '<k-table-header-column disabled></k-table-header-column>'
    });
    expect(root).toEqualHtml(`
      <k-table-header-column disabled>
        <mock:shadow-root>
          <div class="KTableColumn-content">
            <div class="KTableHeaderColumn-text">
              <slot></slot>
            </div>
            <div class="KTableHeaderColumn-icon">
              <i class="vuh-swap-vert-up"></i>
              <i class="vuh-swarp-vert-down"></i>
            </div>
          </div>
          <div class="KTableHeaderColumn-floating-text">
          </div>
        </mock:shadow-root>
      </k-table-header-column>
    `);
  });

  it('should not be sortable', async () => {
    const { root } = await newSpecPage({
      components: [KTableHeaderColumn],
      html: '<k-table-header-column sortable="false"></k-table-header-column>'
    });
    expect(root).toEqualHtml(`
      <k-table-header-column sortable="false">
        <mock:shadow-root>
          <div class="KTableColumn-content">
            <div class="KTableHeaderColumn-text">
              <slot></slot>
            </div>
          </div>
          <div class="KTableHeaderColumn-floating-text">
          </div>
        </mock:shadow-root>
      </k-table-header-column>
    `);
  });

  it('should be active', async () => {
    const { root } = await newSpecPage({
      components: [KTableHeaderColumn],
      html: '<k-table-header-column active></k-table-header-column>'
    });
    expect(root).toEqualHtml(`
      <k-table-header-column active>
        <mock:shadow-root>
          <div class="KTableColumn-content">
            <div class="KTableHeaderColumn-text">
              <slot></slot>
            </div>
            <div class="KTableHeaderColumn-icon">
              <i class="vuh-swap-vert-up"></i>
              <i class="vuh-swarp-vert-down"></i>
            </div>
          </div>
          <div class="KTableHeaderColumn-floating-text">
          </div>
        </mock:shadow-root>
      </k-table-header-column>
    `);
  });

  it('should be the default column', async () => {
    const { root } = await newSpecPage({
      components: [KTableHeaderColumn],
      html: '<k-table-header-column default></k-table-header-column>'
    });
    expect(root).toEqualHtml(`
      <k-table-header-column default>
        <mock:shadow-root>
          <div class="KTableColumn-content">
            <div class="KTableHeaderColumn-text">
              <slot></slot>
            </div>
            <div class="KTableHeaderColumn-icon">
              <i class="vuh-swap-vert-up"></i>
              <i class="vuh-swarp-vert-down"></i>
            </div>
          </div>
          <div class="KTableHeaderColumn-floating-text">
          </div>
        </mock:shadow-root>
      </k-table-header-column>
    `);
  });
});
