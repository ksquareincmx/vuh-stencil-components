import { newE2EPage } from '@stencil/core/testing';

describe('k-progress-bar', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-progress-bar></k-progress-bar>');
    const element = await page.find('k-progress-bar');
    expect(element).toHaveClass('hydrated');
  });
});
