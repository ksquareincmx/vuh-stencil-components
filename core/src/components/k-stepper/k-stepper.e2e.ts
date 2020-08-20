import { newE2EPage } from '@stencil/core/testing';

describe('k-stepper', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-stepper></k-stepper>');
    const element = await page.find('k-stepper');
    expect(element).toHaveClass('hydrated');
  });
});
