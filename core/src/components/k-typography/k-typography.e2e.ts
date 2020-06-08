import { newE2EPage } from '@stencil/core/testing';

describe('k-typography', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-typography></k-typography>');
    const element = await page.find('k-typography');
    expect(element).toHaveClass('hydrated');
  });
});
