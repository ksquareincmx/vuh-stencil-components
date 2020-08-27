import { newE2EPage } from '@stencil/core/testing';

describe('k-dropdown', () => {
  it('should render', async () => {
    const page = await newE2EPage();

    await page.setContent('<k-dropdown></k-dropdown>');
    const element = await page.find('k-dropdown');
    expect(element).toHaveClass('hydrated');
  });

  it('should become active when first clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-dropdown></k-dropdown>');
    const dropdownEl = await page.find('k-dropdown');
    const dropdownButton = await page.find(
      'k-dropdown >>> .KDropdown-dispatcher'
    );
    await dropdownEl.click();

    expect(dropdownButton).toHaveClass('--is-active');
  });
});
