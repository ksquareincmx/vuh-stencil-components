import { newE2EPage } from '@stencil/core/testing';

describe('k-tab', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-tab></k-tab>');
    const element = await page.find('k-tab');

    expect(element).toHaveClass('hydrated');
  });
});
