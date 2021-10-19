import { newSpecPage } from '@stencil/core/testing';
import { Menu } from './k-menu';

describe('k-menu', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [Menu],
      html: '<k-menu></k-menu>'
    });

    expect(root).toEqualHtml(`
      <k-menu class="KMenu">
        <mock:shadow-root>
          <div class="KMenu-toolbar">
            <button class="KMenu-burger-button">
              <k-icon name="menu" size="medium"></k-icon>
            </button>
          </div>
        </mock:shadow-root>
      </k-menu>
    `);
  });

  it('burger menu should be disabled', async () => {
    const { root } = await newSpecPage({
      components: [Menu],
      html: '<k-menu disable-drawer></k-menu>'
    });

    expect(root).toEqualHtml(`
      <k-menu class="KMenu" disable-drawer>
        <mock:shadow-root>
          <div class="KMenu-toolbar">
            <button class="KMenu-burger-button KMenu-burger-disable">
              <k-icon name="menu" size="medium"></k-icon>
            </button>
          </div>
        </mock:shadow-root>
      </k-menu>
    `);
  });

  it('burger menu should be hidden on xs', async () => {
    const { root } = await newSpecPage({
      components: [Menu],
      html: '<k-menu hide-drawer-xs></k-menu>'
    });

    expect(root).toEqualHtml(`
      <k-menu class="KMenu" hide-drawer-xs>
        <mock:shadow-root>
          <div class="KMenu-toolbar">
            <button class="KMenu-burger-button KMenu-burger-hide-xs">
              <k-icon name="menu" size="medium"></k-icon>
            </button>
          </div>
        </mock:shadow-root>
      </k-menu>
    `);
  });

  it('burger menu should be hidden on sm', async () => {
    const { root } = await newSpecPage({
      components: [Menu],
      html: '<k-menu hide-drawer-sm></k-menu>'
    });

    expect(root).toEqualHtml(`
      <k-menu class="KMenu" hide-drawer-sm>
        <mock:shadow-root>
          <div class="KMenu-toolbar">
            <button class="KMenu-burger-button KMenu-burger-hide-sm">
              <k-icon name="menu" size="medium"></k-icon>
            </button>
          </div>
        </mock:shadow-root>
      </k-menu>
    `);
  });

  it('burger menu should be hidden on md', async () => {
    const { root } = await newSpecPage({
      components: [Menu],
      html: '<k-menu hide-drawer-md></k-menu>'
    });

    expect(root).toEqualHtml(`
      <k-menu class="KMenu" hide-drawer-md>
        <mock:shadow-root>
          <div class="KMenu-toolbar">
            <button class="KMenu-burger-button KMenu-burger-hide-md">
              <k-icon name="menu" size="medium"></k-icon>
            </button>
          </div>
        </mock:shadow-root>
      </k-menu>
    `);
  });

  it('burger menu should be hidden on lg', async () => {
    const { root } = await newSpecPage({
      components: [Menu],
      html: '<k-menu hide-drawer-lg></k-menu>'
    });

    expect(root).toEqualHtml(`
      <k-menu class="KMenu" hide-drawer-lg>
        <mock:shadow-root>
          <div class="KMenu-toolbar">
            <button class="KMenu-burger-button KMenu-burger-hide-lg">
              <k-icon name="menu" size="medium"></k-icon>
            </button>
          </div>
        </mock:shadow-root>
      </k-menu>
    `);
  });

  it('burger menu should be hidden on xl', async () => {
    const { root } = await newSpecPage({
      components: [Menu],
      html: '<k-menu hide-drawer-xl></k-menu>'
    });

    expect(root).toEqualHtml(`
      <k-menu class="KMenu" hide-drawer-xl>
        <mock:shadow-root>
          <div class="KMenu-toolbar">
            <button class="KMenu-burger-button KMenu-burger-hide-xl">
              <k-icon name="menu" size="medium"></k-icon>
            </button>
          </div>
        </mock:shadow-root>
      </k-menu>
    `);
  });
});
