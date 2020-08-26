import { newE2EPage } from '@stencil/core/testing';

describe('k-menu-nav', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-menu-nav></k-menu-nav>');
    const element = await page.find('k-menu-nav');
    expect(element).toHaveClass('hydrated');
  });
});
