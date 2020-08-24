import { newE2EPage } from '@stencil/core/testing';

describe('k-notification-group', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-notification-group></k-notification-group>');
    const element = await page.find('k-notification-group');
    expect(element).toHaveClass('hydrated');
  });
});
