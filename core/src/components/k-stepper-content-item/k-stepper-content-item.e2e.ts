import { newE2EPage } from '@stencil/core/testing';

describe('k-stepper-content-item', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-stepper-content-item></k-stepper-content-item>');
    const element = await page.find('k-stepper-content-item');
    expect(element).toHaveClass('hydrated');
  });
});
