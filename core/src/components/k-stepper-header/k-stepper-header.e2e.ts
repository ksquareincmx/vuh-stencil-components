import { newE2EPage } from '@stencil/core/testing';

describe('k-stepper-header', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-stepper-header></k-stepper-header>');
    const element = await page.find('k-stepper-header');
    expect(element).toHaveClass('hydrated');
  });
});
