import { newE2EPage } from '@stencil/core/testing';

describe('k-text-field', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-text-field></k-text-field>');
    const element = await page.find('k-text-field');
    expect(element).toHaveClass('hydrated');
  });
});
