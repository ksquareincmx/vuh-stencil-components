import { newE2EPage } from '@stencil/core/testing';

describe('k-menu-content', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-menu-content></k-menu-content>');
    const element = await page.find('k-menu-content');
    expect(element).toHaveClass('hydrated');
  });
});
