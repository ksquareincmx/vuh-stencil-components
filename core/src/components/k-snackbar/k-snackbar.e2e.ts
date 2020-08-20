import { newE2EPage } from '@stencil/core/testing';

describe('k-snackbar', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-snackbar></k-snackbar>');
    const element = await page.find('k-snackbar');
    expect(element).toHaveClass('hydrated');
  });
});
