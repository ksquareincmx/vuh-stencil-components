import { newE2EPage } from '@stencil/core/testing';

describe('k-spinner', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-spinner></k-spinner>');
    const element = await page.find('k-spinner');
    expect(element).toHaveClass('hydrated');
  });
});
