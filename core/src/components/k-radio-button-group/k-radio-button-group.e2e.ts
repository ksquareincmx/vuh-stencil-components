import { newE2EPage } from '@stencil/core/testing';

describe('k-radio-button-group', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-radio-button-group></k-radio-button-group>');
    const element = await page.find('k-radio-button-group');
    expect(element).toHaveClass('hydrated');
  });
});
