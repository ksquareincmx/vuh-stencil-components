import { newE2EPage } from '@stencil/core/testing';

describe('k-icon', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-icon name="alert-circle"></k-icon>');
    const element = await page.find('k-icon');
    expect(element).toHaveClass('hydrated');
  });
});
