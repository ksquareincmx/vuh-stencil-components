import { newE2EPage } from '@stencil/core/testing';

describe('k-menu', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-menu></k-menu>');
    const element = await page.find('k-menu');
    expect(element).toHaveClass('hydrated');
  });
});
