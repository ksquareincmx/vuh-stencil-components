import { newE2EPage } from '@stencil/core/testing';

describe('k-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-avatar></k-avatar>');
    const element = await page.find('k-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
