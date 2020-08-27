import { newE2EPage } from '@stencil/core/testing';

describe('k-dropdown-item', () => {
  it('should render', async () => {
    const page = await newE2EPage();

    await page.setContent('<k-dropdown-item></k-dropdown-item>');
    const element = await page.find('k-dropdown-item');
    expect(element).toHaveClass('hydrated');
  });
});
