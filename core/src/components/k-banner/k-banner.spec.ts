import { newSpecPage } from '@stencil/core/testing';
import { Banner } from './k-banner';

describe('k-banner', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [Banner],
      html: '<k-banner></k-banner>'
    });

    expect(root).toEqualHtml(`
      <k-banner class="KBanner">
        <mock:shadow-root>
          <i class="KBanner-icon vuh-check-circle --is-success"></i>
          <label class="KBanner-text"></label>
          <div class="KBanner-action">
            <slot name="button"></slot>
          </div>
        </mock:shadow-root>
      </Host>
    `);
  });

  it('k-banner should be type error', async () => {
    const { root } = await newSpecPage({
      components: [Banner],
      html: '<k-banner type="error"></k-banner>'
    });

    expect(root).toEqualHtml(`
      <k-banner class="KBanner" type="error">
        <mock:shadow-root>
          <i class="KBanner-icon vuh-alert-circle --is-error"></i>
          <label class="KBanner-text"></label>
          <div class="KBanner-action">
            <slot name="button"></slot>
          </div>
        </mock:shadow-root>
      </Host>
    `);
  });
});
