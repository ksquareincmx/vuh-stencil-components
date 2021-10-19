import { newSpecPage } from '@stencil/core/testing';
import { Icon } from './k-icon';

describe('k-icon', () => {
  it('should render alert-circle icon', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<k-icon name="alert-circle"></k-icon>'
    });

    expect(root).toEqualHtml(`
      <k-icon name="alert-circle">
        <mock:shadow-root>
          <i class="vuh-alert-circle KIcon--small"></i>
        </mock:shadow-root>
      </k-icon>
    `);
  });

  it('should be medium size', async () => {
    const { root } = await newSpecPage({
      components: [Icon],
      html: '<k-icon name="alert-circle" size="medium"></k-icon>'
    });

    expect(root).toEqualHtml(`
      <k-icon name="alert-circle" size="medium">
        <mock:shadow-root>
          <i class="vuh-alert-circle KIcon--medium"></i>
        </mock:shadow-root>
      </k-icon>
    `);
  });
});
