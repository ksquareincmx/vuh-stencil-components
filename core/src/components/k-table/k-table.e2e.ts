import { newE2EPage } from '@stencil/core/testing';

describe('k-table', () => {
  it('should render', async () => {
    const page = await newE2EPage();

    await page.setContent('<k-table></k-table>');
    const element = await page.find('k-table');
    expect(element).toHaveClass('hydrated');
  });
});
