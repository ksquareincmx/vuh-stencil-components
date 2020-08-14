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
    const component = await page.find('k-button >>> slot');
    expect(component.textContent).toBe('Default');
  });

  it('should be clicked', async () => {
    const page = await newE2EPage();
    const mockFn = jest.fn();

    await page.setContent(`
      <k-button id="button"></k-button>

      <script>
        const $btn = document.getElementById('button');
        $btn.addEventListener('click', () => {
          ${mockFn()}
        });
      </script>
    `);
    const button = await page.find('k-button');
    await button.click();

    expect(mockFn.mock.calls.length).toBe(1);
  });
});
