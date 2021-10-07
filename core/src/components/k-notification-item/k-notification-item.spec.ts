import { newSpecPage } from '@stencil/core/testing';
import { NotificationItem } from './k-notification-item';

describe('k-notification-item', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [NotificationItem],
      html: '<k-notification-item></k-notification-item>'
    });

    expect(root).toEqualHtml(`
      <k-notification-item>
        <mock:shadow-root>
          <div class="KNotificationItem">
            <div class="KNotificationItem-header">
              <div class="KNotificationItem-header-left">
                <k-icon
                name="notifications-active"
                size="medium"
                ></k-icon>
                <span class="KNotificationItem-header-left-label"></span>
                <span class="KNotificationItem-header-left-dot">•</span>
                <span class="KNotificationItem-header-left-time"></span>
              </div>
              <div class="KNotificationItem-header-right">
                <k-icon
                  class="KNotificationItem-header-right-icon --unread"
                  name="visibility-off"
                ></k-icon>
                <span class="KNotificationItem-header-right-status --unread">
                  Unread
                </span>
              </div>
            </div>
            <div class="KNotificationItem-content">
              <slot></slot>
            </div>
            <div class="KNotificationItem-divider"></div>
          </div>
        </mock:shadow-root>
      </k-notification-item>
    `);
  });

  it('alert color should be "red"', async () => {
    const { root } = await newSpecPage({
      components: [NotificationItem],
      html: '<k-notification-item alert-color="red"></k-notification-item>'
    });

    expect(root).toEqualHtml(`
      <k-notification-item alert-color="red">
        <mock:shadow-root>
          <div class="KNotificationItem">
            <div class="KNotificationItem-header">
              <div class="KNotificationItem-header-left">
                <k-icon
                name="notifications-active"
                size="medium"
                style="color: red;"
                ></k-icon>
                <span class="KNotificationItem-header-left-label"></span>
                <span class="KNotificationItem-header-left-dot">•</span>
                <span class="KNotificationItem-header-left-time"></span>
              </div>
              <div class="KNotificationItem-header-right">
                <k-icon
                  class="KNotificationItem-header-right-icon --unread"
                  name="visibility-off"
                ></k-icon>
                <span class="KNotificationItem-header-right-status --unread">
                  Unread
                </span>
              </div>
            </div>
            <div class="KNotificationItem-content">
              <slot></slot>
            </div>
            <div class="KNotificationItem-divider"></div>
          </div>
        </mock:shadow-root>
      </k-notification-item>
    `);
  });

  it('label should be "hello"', async () => {
    const { root } = await newSpecPage({
      components: [NotificationItem],
      html: '<k-notification-item label="hello"></k-notification-item>'
    });

    expect(root).toEqualHtml(`
      <k-notification-item label="hello">
        <mock:shadow-root>
          <div class="KNotificationItem">
            <div class="KNotificationItem-header">
              <div class="KNotificationItem-header-left">
                <k-icon
                name="notifications-active"
                size="medium"
                ></k-icon>
                <span class="KNotificationItem-header-left-label">hello</span>
                <span class="KNotificationItem-header-left-dot">•</span>
                <span class="KNotificationItem-header-left-time"></span>
              </div>
              <div class="KNotificationItem-header-right">
                <k-icon
                  class="KNotificationItem-header-right-icon --unread"
                  name="visibility-off"
                ></k-icon>
                <span class="KNotificationItem-header-right-status --unread">
                  Unread
                </span>
              </div>
            </div>
            <div class="KNotificationItem-content">
              <slot></slot>
            </div>
            <div class="KNotificationItem-divider"></div>
          </div>
        </mock:shadow-root>
      </k-notification-item>
    `);
  });

  it('time should be "30 min"', async () => {
    const { root } = await newSpecPage({
      components: [NotificationItem],
      html: '<k-notification-item time="30 min"></k-notification-item>'
    });

    expect(root).toEqualHtml(`
      <k-notification-item time="30 min">
        <mock:shadow-root>
          <div class="KNotificationItem">
            <div class="KNotificationItem-header">
              <div class="KNotificationItem-header-left">
                <k-icon
                name="notifications-active"
                size="medium"
                ></k-icon>
                <span class="KNotificationItem-header-left-label"></span>
                <span class="KNotificationItem-header-left-dot">•</span>
                <span class="KNotificationItem-header-left-time">30 min</span>
              </div>
              <div class="KNotificationItem-header-right">
                <k-icon
                  class="KNotificationItem-header-right-icon --unread"
                  name="visibility-off"
                ></k-icon>
                <span class="KNotificationItem-header-right-status --unread">
                  Unread
                </span>
              </div>
            </div>
            <div class="KNotificationItem-content">
              <slot></slot>
            </div>
            <div class="KNotificationItem-divider"></div>
          </div>
        </mock:shadow-root>
      </k-notification-item>
    `);
  });

  it('notification should be "read"', async () => {
    const { root } = await newSpecPage({
      components: [NotificationItem],
      html: '<k-notification-item is-read></k-notification-item>'
    });

    expect(root).toEqualHtml(`
      <k-notification-item is-read>
        <mock:shadow-root>
          <div class="KNotificationItem">
            <div class="KNotificationItem-header">
              <div class="KNotificationItem-header-left">
                <k-icon
                name="notifications-active"
                size="medium"
                ></k-icon>
                <span class="KNotificationItem-header-left-label"></span>
                <span class="KNotificationItem-header-left-dot">•</span>
                <span class="KNotificationItem-header-left-time"></span>
              </div>
              <div class="KNotificationItem-header-right">
                <k-icon
                  class="KNotificationItem-header-right-icon --read"
                  name="remove-red-eye"
                ></k-icon>
                <span class="KNotificationItem-header-right-status --read">
                  Read
                </span>
              </div>
            </div>
            <div class="KNotificationItem-content">
              <slot></slot>
            </div>
            <div class="KNotificationItem-divider"></div>
          </div>
        </mock:shadow-root>
      </k-notification-item>
    `);
  });
});
