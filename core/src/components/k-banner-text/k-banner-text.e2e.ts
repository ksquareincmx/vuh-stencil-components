import { newE2EPage } from '@stencil/core/testing';

describe('k-banner-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-banner-text></k-banner-text>');
    const element = await page.find('k-banner-text');
    expect(element).toHaveClass('hydrated');
  });
});
