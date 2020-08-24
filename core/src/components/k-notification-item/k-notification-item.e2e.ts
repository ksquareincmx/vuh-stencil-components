import { newE2EPage } from '@stencil/core/testing';

describe('k-notification-item', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-notification-item></k-notification-item>');
    const element = await page.find('k-notification-item');
    expect(element).toHaveClass('hydrated');
  });
});
