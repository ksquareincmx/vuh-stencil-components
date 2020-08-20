import { newE2EPage } from '@stencil/core/testing';

describe('k-carousel-item', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-carousel-item></k-carousel-item>');
    const element = await page.find('k-carousel-item');
    expect(element).toHaveClass('hydrated');
  });
});
