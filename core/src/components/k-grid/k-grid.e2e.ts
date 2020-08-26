import { newE2EPage } from '@stencil/core/testing';

describe('k-grid', () => {
  it('should render', async () => {
    const page = await newE2EPage();

    await page.setContent('<k-grid></k-grid>');
    const element = await page.find('k-grid');
    expect(element).toHaveClass('hydrated');
  });
});
