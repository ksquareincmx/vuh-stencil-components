import { newE2EPage } from '@stencil/core/testing';

describe('k-stepper-header-item', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-stepper-header-item></k-stepper-header-item>');
    const element = await page.find('k-stepper-header-item');
    expect(element).toHaveClass('hydrated');
  });
});
