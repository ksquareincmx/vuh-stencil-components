import { newE2EPage } from '@stencil/core/testing';

describe('k-breadcrumbs-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-breadcrumbs-item></k-breadcrumbs-item>');
    const element = await page.find('k-breadcrumbs-item');
    expect(element).toHaveClass('hydrated');
  });
});
