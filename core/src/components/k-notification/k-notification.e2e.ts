import { newE2EPage } from '@stencil/core/testing';

describe('k-notification', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-notification></k-notification>');
    const element = await page.find('k-notification');
    expect(element).toHaveClass('hydrated');
  });

  it('should open when is clicked', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-notification></k-notification>');
    const button = await page.find('k-notification >>> .KNotification-button');
    await button.click();
    expect(button).toHaveClass('KNotification-opened');
  });

  it('should show content', async () => {
    const page = await newE2EPage();
    await page.setContent('<k-notification></k-notification>');
    const button = await page.find('k-notification >>> .KNotification-button');
    const content = await page.find(
      'k-notification >>> .KNotification-content'
    );
    await button.click();
    expect(content).toHaveClass('KNotification-content--is-open');
  });
});
