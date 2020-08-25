import { newE2EPage } from '@stencil/core/testing';

describe('k-collapse-parent', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-collapse-parent></k-collapse-parent>');
    const element = await page.find('k-collapse-parent');
    expect(element).toHaveClass('hydrated');
  });
});
