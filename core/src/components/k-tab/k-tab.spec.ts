import { newSpecPage } from '@stencil/core/testing';
import { Tab } from './k-tab';

describe('k-tab', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [Tab],
      html: '<k-tab></k-tab>'
    });

    expect(root).toEqualHtml(`
      <k-tab class="KTab">
        <mock:shadow-root>
          <slot></slot>
          <div class="KTab--selected" style="width: Infinity%; transform: translateX(-100%);"></div>
        </mock:shadow-root>
      </k-tab>
    `);
  });
});
