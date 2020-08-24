import { newE2EPage } from '@stencil/core/testing';

describe('k-banner', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-banner></k-banner>');
    const element = await page.find('k-banner');
    expect(element).toHaveClass('hydrated');
  });
});
