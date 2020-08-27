import { newE2EPage } from '@stencil/core/testing';

describe('k-input', () => {
  it('should render', async () => {
    const page = await newE2EPage();

    await page.setContent('<k-input></k-input>');
    const element = await page.find('k-input');
    expect(element).toHaveClass('hydrated');
  });
});
