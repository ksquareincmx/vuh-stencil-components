import { newSpecPage } from '@stencil/core/testing';
import { Avatar } from './k-avatar';

describe('k-typography', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Avatar],
      html: '<k-avatar></k-avatar>'
    });

    expect(root).toEqualHtml(`
      <k-avatar>
        <mock:shadow-root>
          <div class="KAvatar small">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </k-avatar>
    `);
  });

  it('renders with props', async () => {
    const { root } = await newSpecPage({
      components: [Avatar],
      html: `<k-avatar size="medium"></k-avatar>`
    });
    expect(root).toEqualHtml(`
        <k-avatar size="medium">
          <mock:shadow-root>
            <div class="KAvatar medium">
              <slot></slot>
            </div>
          </mock:shadow-root>
        </k-avatar>
      `);
  });
});
