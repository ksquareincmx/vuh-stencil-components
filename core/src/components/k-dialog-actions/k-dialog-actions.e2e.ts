import { newE2EPage } from '@stencil/core/testing';

describe('k-dialog-actions', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-dialog-actions></k-dialog-actions>');
    const element = await page.find('k-dialog-actions');
    expect(element).toHaveClass('hydrated');
  });
});
