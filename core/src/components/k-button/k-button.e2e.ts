import { newE2EPage } from '@stencil/core/testing';

describe('k-button', () => {
  it('should render', async () => {
    const page = await newE2EPage();

    await page.setContent('<k-button></k-button>');
    const element = await page.find('k-button');
    expect(element).toHaveClass('hydrated');
  });

  it('should render with default data', async () => {
    const page = await newE2EPage();

    await page.setContent('<k-button></k-button>');
    const component = await page.find('k-button');
    const element = await component.find('slot');
    expect(element.textContent).toEqual(`Default`);
  });
});
