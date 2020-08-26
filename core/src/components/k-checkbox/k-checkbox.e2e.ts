import { newE2EPage } from '@stencil/core/testing';

describe('k-checkbox', () => {
  it('should render', async () => {
    const page = await newE2EPage();

    await page.setContent('<k-checkbox></k-checkbox>');
    const element = await page.find('k-checkbox');
    expect(element).toHaveClass('hydrated');
  });

  it('should change to checked on click', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-checkbox></k-checkbox>');
    const checkboxComponent = await page.find('k-checkbox');
    const checkboxLabel = await page.find('k-checkbox >>> .KCheckbox');
    await checkboxLabel.click();

    expect(checkboxComponent).toHaveAttribute('checked');
  });
});
