import { newE2EPage } from '@stencil/core/testing';

describe('k-switch', () => {
  it('render', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-switch></k-switch>');
    const element = await page.find('k-switch');
    expect(element).toHaveClass('hydrated');
  });

  it('should change to checked', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-switch></k-switch>');
    const switchEl = await page.find('k-switch');
    const switchAction = await page.find('k-switch >>> .KSwitch-action');
    await switchAction.click();

    expect(switchEl).toHaveAttribute('checked');
  });
});
