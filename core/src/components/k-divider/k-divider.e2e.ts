import { newE2EPage } from '@stencil/core/testing';

describe('k-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-divider></k-divider>');
    const element = await page.find('k-divider');
    expect(element).toHaveClass('hydrated');
  });
});
