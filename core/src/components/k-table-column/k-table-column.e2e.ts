import { newE2EPage } from '@stencil/core/testing';

describe('k-table-column', () => {
  it('should render', async () => {
    const page = await newE2EPage();

    await page.setContent('<k-table-column></k-table-column>');
    const element = await page.find('k-table-column');
    expect(element).toHaveClass('hydrated');
  });
});
