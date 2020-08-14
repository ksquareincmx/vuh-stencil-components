import { newE2EPage } from '@stencil/core/testing';

describe('k-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-tooltip></k-tooltip>');
    const element = await page.find('k-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
