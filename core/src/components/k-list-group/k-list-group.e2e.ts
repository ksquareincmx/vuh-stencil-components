import { newE2EPage } from '@stencil/core/testing';

describe('k-list-group', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-list-group></k-list-group>');
    const element = await page.find('k-list-group');

    expect(element).toHaveClass('hydrated');
  });
});
