import { newE2EPage } from '@stencil/core/testing';

describe('k-collapse-menu', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-collapse-menu></k-collapse-menu>');
    const element = await page.find('k-collapse-menu');

    expect(element).toHaveClass('hydrated');
  });
});
