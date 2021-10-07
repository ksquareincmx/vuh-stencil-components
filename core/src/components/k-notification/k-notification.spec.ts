import { newSpecPage } from '@stencil/core/testing';
import { Notification } from './k-notification';

describe('k-notification', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Notification],
      html: '<k-notification></k-notification>'
    });

    expect(root).toEqualHtml(`
      <k-notification>
        <mock:shadow-root>
          <div class="KNotification">
            <button class="KNotification-button" data-count="0">
              <k-icon
                name="notifications"
                size="medium"
                class="KNotification-bell"
              ></k-icon>
            </button>
            <div class="KNotification-content">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
      </k-notification>
    `);
  });

  it('should be rendered with props', async () => {
    const { root } = await newSpecPage({
      components: [Notification],
      html: '<k-notification notification-count="3"></k-notification>'
    });

    expect(root).toEqualHtml(`
      <k-notification notification-count="3">
        <mock:shadow-root>
          <div class="KNotification">
            <button class="KNotification--is-notified KNotification-button" data-count="3">
              <k-icon
                name="notifications"
                size="medium"
                class="KNotification-bell"
              ></k-icon>
            </button>
            <div class="KNotification-content">
              <slot></slot>
            </div>
          </div>
        </mock:shadow-root>
      </k-notification>
    `);
  });
});
