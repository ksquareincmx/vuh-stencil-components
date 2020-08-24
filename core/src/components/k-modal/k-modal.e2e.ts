import { newE2EPage } from '@stencil/core/testing';

describe('k-modal', () => {
  it('k-modal', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-modal></k-modal>');
    const element = await page.find('k-modal');
    expect(element).toHaveClass('hydrated');
  });

  it('k-modal should be closed', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-modal show></k-modal>');
    const modal = await page.find('k-modal');
    const closeButton = await page.find('k-modal >>> .KModal-btn.vuh-close');
    await closeButton.click();
    expect(modal).not.toHaveClass('--is-shown');
  });
});
