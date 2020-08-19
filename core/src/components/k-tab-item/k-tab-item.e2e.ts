import { newE2EPage } from '@stencil/core/testing';

describe('k-tab-item', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-tab-item></k-tab-item>');
    const element = await page.find('k-tab-item');
    expect(element).toHaveClass('hydrated');
  });
});
