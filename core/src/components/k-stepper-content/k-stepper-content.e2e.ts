import { newE2EPage } from '@stencil/core/testing';

describe('k-stepper-content', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-stepper-content></k-stepper-content>');
    const element = await page.find('k-stepper-content');
    expect(element).toHaveClass('hydrated');
  });
});
