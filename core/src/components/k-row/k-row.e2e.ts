import { newE2EPage } from '@stencil/core/testing';

describe('k-row', () => {
  it('should render', async () => {
    const page = await newE2EPage();

    await page.setContent('<k-row></k-row>');
    const element = await page.find('k-row');
    expect(element).toHaveClass('hydrated');
  });
});
