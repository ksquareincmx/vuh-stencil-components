import { newE2EPage } from '@stencil/core/testing';

describe('k-column', () => {
  it('should render', async () => {
    const page = await newE2EPage();

    await page.setContent('<k-column></k-column>');
    const element = await page.find('k-column');
    expect(element).toHaveClass('hydrated');
  });
});
