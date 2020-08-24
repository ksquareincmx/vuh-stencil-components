import { newE2EPage } from '@stencil/core/testing';

describe('k-dialog', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-dialog></k-dialog>');
    const element = await page.find('k-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
