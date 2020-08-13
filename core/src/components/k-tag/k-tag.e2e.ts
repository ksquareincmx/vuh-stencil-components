import { newE2EPage } from '@stencil/core/testing';

describe('k-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-tag></k-tag>');
    const element = await page.find('k-tag');
    expect(element).toHaveClass('hydrated');
  });
});
