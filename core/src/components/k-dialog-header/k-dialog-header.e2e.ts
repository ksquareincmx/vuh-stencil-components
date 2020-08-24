import { newE2EPage } from '@stencil/core/testing';

describe('k-dialog-header', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-dialog-header></k-dialog-header>');
    const element = await page.find('k-dialog-header');
    expect(element).toHaveClass('hydrated');
  });
});
