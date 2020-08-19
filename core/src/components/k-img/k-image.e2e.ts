import { newE2EPage } from '@stencil/core/testing';

describe('k-img', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-img src=""></k-img>');
    const element = await page.find('k-img');
    expect(element).toHaveClass('hydrated');
  });
});
