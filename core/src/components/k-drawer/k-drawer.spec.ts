import { newSpecPage } from '@stencil/core/testing';
import { Drawer } from './k-drawer';

describe('k-drawer', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [Drawer],
      html: '<k-drawer></k-drawer>'
    });

    expect(root).toEqualHtml(`
      <k-drawer>
        <mock:shadow-root>
          <div class="KDrawer">
            <div class="KDrawer-sidenav">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
      </k-drawer>
    `);
  });

  it('k-drawer should receive for-key prop', async () => {
    const { root } = await newSpecPage({
      components: [Drawer],
      html: '<k-drawer for-key="k-drawer-key"></k-drawer>'
    });

    expect(root).toEqualHtml(`
      <k-drawer for-key="k-drawer-key">
        <mock:shadow-root>
          <div class="KDrawer">
            <div class="KDrawer-sidenav">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
      </k-drawer>
    `);
  });
});
