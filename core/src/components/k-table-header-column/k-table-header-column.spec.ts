import { newSpecPage } from '@stencil/core/testing';
import { TableHeaderColumn } from './k-table-header-column';

describe('k-table-header-column', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [TableHeaderColumn],
      html: '<k-table-header-column></k-table-header-column>'
    });
    expect(root).toEqualHtml(`
      <k-table-header-column class="KTableHeaderColumn KTableHeaderColumn--col-1" id="hc-0" sortby="none">
        <mock:shadow-root>
          <div class="KTableHeaderColumn-content">
            <div class="KTableHeaderColumn-text">
              <slot></slot>
            </div>
            <div class="KTableHeaderColumn-icon">
              <i class="vuh-swap-vert-up"></i>
              <i class="vuh-swap-vert-down"></i>
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
      components: [TableHeaderColumn],
      html: '<k-table-header-column disabled></k-table-header-column>'
    });
    expect(root).toEqualHtml(`
      <k-table-header-column class="KTableHeaderColumn KTableHeaderColumn--col-1" id="hc-1" sortby="none" disabled>
        <mock:shadow-root>
          <div class="KTableHeaderColumn-content">
            <div class="KTableHeaderColumn-text">
              <slot></slot>
            </div>
            <div class="KTableHeaderColumn-icon --is-disabled">
              <i class="vuh-swap-vert-up"></i>
              <i class="vuh-swap-vert-down"></i>
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
      components: [TableHeaderColumn],
      html: '<k-table-header-column sortable="false"></k-table-header-column>'
    });
    expect(root).toEqualHtml(`
      <k-table-header-column sortable="false" class="KTableHeaderColumn KTableHeaderColumn--col-1" id="hc-2" sortby="none">
        <mock:shadow-root>
          <div class="KTableHeaderColumn-content">
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
      components: [TableHeaderColumn],
      html: '<k-table-header-column active></k-table-header-column>'
    });
    expect(root).toEqualHtml(`
      <k-table-header-column active class="KTableHeaderColumn KTableHeaderColumn--col-1" id="hc-3" sortby="none">
        <mock:shadow-root>
          <div class="KTableHeaderColumn-content">
            <div class="KTableHeaderColumn-text">
              <slot></slot>
            </div>
            <div class="KTableHeaderColumn-icon">
              <i class="vuh-swap-vert-up"></i>
              <i class="vuh-swap-vert-down"></i>
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
      components: [TableHeaderColumn],
      html: '<k-table-header-column default></k-table-header-column>'
    });
    expect(root).toEqualHtml(`
      <k-table-header-column default class="KTableHeaderColumn KTableHeaderColumn--col-1" id="hc-4" sortby="none">
        <mock:shadow-root>
          <div class="KTableHeaderColumn-content">
            <div class="KTableHeaderColumn-text">
              <slot></slot>
            </div>
            <div class="KTableHeaderColumn-icon">
              <i class="vuh-swap-vert-up"></i>
              <i class="vuh-swap-vert-down"></i>
            </div>
          </div>
          <div class="KTableHeaderColumn-floating-text">
          </div>
        </mock:shadow-root>
      </k-table-header-column>
    `);
  });
});
