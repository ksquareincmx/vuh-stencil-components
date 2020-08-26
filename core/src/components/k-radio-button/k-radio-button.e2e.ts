import { newE2EPage } from '@stencil/core/testing';

describe('k-radio-button', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-radio-button></k-radio-button>');
    const element = await page.find('k-radio-button');
    expect(element).toHaveClass('hydrated');
  });
});
