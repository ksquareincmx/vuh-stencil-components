import { newE2EPage } from '@stencil/core/testing';

describe('k-table-header-column', () => {
  it('should render', async () => {
    const page = await newE2EPage();

    await page.setContent('<k-table-header-column></k-table-header-column>');
    const element = await page.find('k-table-header-column');
    expect(element).toHaveClass('hydrated');
  });

  it('should be clicked', async () => {
    const page = await newE2EPage();
    const mockFn = jest.fn();

    await page.setContent(`
      <k-table-header-column id="table-header-column"></k-table-header-column>

      <script>
        const $col = document.getElementById('table-header-column');
        $col.addEventListener('click', () => {
          ${mockFn()}
        });
      </script>
    `);
    const column = await page.find('k-table-header-column');
    await column.click();

    expect(mockFn.mock.calls.length).toBe(1);
  });
});
