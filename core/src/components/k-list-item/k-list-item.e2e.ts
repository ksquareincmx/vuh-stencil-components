import { newE2EPage } from '@stencil/core/testing';

describe('k-list-item', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-list-item></k-list-item>');
    const element = await page.find('k-list-item');
    expect(element).toHaveClass('hydrated');
  });
});
