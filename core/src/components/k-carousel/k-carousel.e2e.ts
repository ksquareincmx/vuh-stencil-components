import { newE2EPage } from '@stencil/core/testing';

describe('k-carousel', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-carousel></k-carousel>');
    const element = await page.find('k-carousel');
    expect(element).toHaveClass('hydrated');
  });
});
