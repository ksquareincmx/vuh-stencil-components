import { newE2EPage } from '@stencil/core/testing';

describe('k-search-bar', () => {
  it('should render', async () => {
    const page = await newE2EPage();

    await page.setContent('<k-search-bar></k-search-bar>');
    const element = await page.find('k-search-bar');
    expect(element).toHaveClass('hydrated');
  });
});
