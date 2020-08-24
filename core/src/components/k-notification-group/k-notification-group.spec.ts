import { newSpecPage } from '@stencil/core/testing';
import { KNotificationGroup } from './k-notification-group';

describe('k-notification-group', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [KNotificationGroup],
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
