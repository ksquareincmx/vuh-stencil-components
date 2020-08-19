import { newE2EPage } from '@stencil/core/testing';

describe('k-elevation', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-elevation></k-elevation>');
    const element = await page.find('k-elevation');
    expect(element).toHaveClass('hydrated');
  });
});
