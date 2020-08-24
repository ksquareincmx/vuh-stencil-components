import { newE2EPage } from '@stencil/core/testing';

describe('k-dialog-body', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-dialog-body></k-dialog-body>');
    const element = await page.find('k-dialog-body');
    expect(element).toHaveClass('hydrated');
  });
});
