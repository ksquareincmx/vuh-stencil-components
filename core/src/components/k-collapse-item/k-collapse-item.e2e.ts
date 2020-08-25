import { newE2EPage } from '@stencil/core/testing';

describe('k-collapse-item', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-collapse-item></k-collapse-item>');
    const element = await page.find('k-collapse-item');
    expect(element).toHaveClass('hydrated');
  });
});
