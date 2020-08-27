import { newE2EPage } from '@stencil/core/testing';

describe('k-paginator', () => {
  it('should render', async () => {
    const page = await newE2EPage();

    await page.setContent('<k-paginator></k-paginator>');
    const element = await page.find('k-paginator');
    expect(element).toHaveClass('hydrated');
  });
});
