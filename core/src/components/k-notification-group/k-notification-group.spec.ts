import { newSpecPage } from '@stencil/core/testing';
import { NotificationGroup } from './k-notification-group';

describe('k-notification-group', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [NotificationGroup],
      html: '<k-notification-group></k-notification-group>'
    });

    expect(root).toEqualHtml(`
      <k-notification-group class="KNotificationGroup">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-notification-group>
    `);
  });
});
