import { newE2EPage } from '@stencil/core/testing';

describe('k-breadcrumbs', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-breadcrumbs></k-breadcrumbs>');
    const element = await page.find('k-breadcrumbs');
    expect(element).toHaveClass('hydrated');
  });
});
