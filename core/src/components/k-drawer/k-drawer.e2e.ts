import { newE2EPage } from '@stencil/core/testing';

describe('k-drawer', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-drawer></k-drawer>');
    const element = await page.find('k-drawer');

    expect(element).toHaveClass('hydrated');
  });
});
