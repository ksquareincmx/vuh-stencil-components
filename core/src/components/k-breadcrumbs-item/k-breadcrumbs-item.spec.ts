import { newSpecPage } from '@stencil/core/testing';
import { BreadcrumbsItem } from './k-breadcrumbs-item';

describe('k-breadcrumbs-item', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [BreadcrumbsItem],
      html: '<k-breadcrumbs-item></k-breadcrumbs-item>'
    });

    expect(root).toEqualHtml(`
      <k-breadcrumbs-item class="KBreadcrumbsItem">
        <mock:shadow-root>
          <div class="KBreadcrumbsItem-link KBreadcrumbsItem-normal">
            <slot></slot>
          </div>
          <i class="KBreadcrumbsItem-icon vuh-keyboard-arrow-right"></i>
        </mock:shadow-root>
      </k-breadcrumbs-item>
    `);
  });

  it('should be rendered with props', async () => {
    const { root } = await newSpecPage({
      components: [BreadcrumbsItem],
      html: '<k-breadcrumbs-item current></k-breadcrumbs-item>'
    });

    expect(root).toEqualHtml(`
      <k-breadcrumbs-item class="KBreadcrumbsItem" current>
        <mock:shadow-root>
          <div class="KBreadcrumbsItem-link KBreadcrumbsItem-current">
            <slot></slot>
          </div>
          <i class="KBreadcrumbsItem-icon vuh-keyboard-arrow-right"></i>
        </mock:shadow-root>
      </k-breadcrumbs-item>
    `);
  });
});
