import { newE2EPage } from '@stencil/core/testing';

describe('k-table-row', () => {
  it('should render', async () => {
    const page = await newE2EPage();

    await page.setContent('<k-table-row></k-table-row>');
    const element = await page.find('k-table-row');
    expect(element).toHaveClass('hydrated');
  });
});
