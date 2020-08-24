import { newE2EPage } from '@stencil/core/testing';

describe('k-dialog-content', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-dialog-content></k-dialog-content>');
    const element = await page.find('k-dialog-content');
    expect(element).toHaveClass('hydrated');
  });
});
