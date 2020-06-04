import { newE2EPage } from '@stencil/core/testing';

describe('k-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<k-label></k-label>');
    const element = await page.find('k-label');
    expect(element).toHaveClass('hydrated');
  });

  it('renders with default data', async () => {
    const page = await newE2EPage();

    await page.setContent('<k-label></k-label>');
    const component = await page.find('k-label');
    const element = await component.find('label');
    expect(element.textContent).toEqual(`This is a label`);
  });
});
