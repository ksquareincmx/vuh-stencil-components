import { newE2EPage } from '@stencil/core/testing';

describe('k-collapse-list', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-collapse-list></k-collapse-list>');
    const element = await page.find('k-collapse-list');
    expect(element).toHaveClass('hydrated');
  });
});
