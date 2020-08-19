import { newE2EPage } from '@stencil/core/testing';

describe('k-content', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-content></k-content>');
    const element = await page.find('k-content');
    expect(element).toHaveClass('hydrated');
  });
});
