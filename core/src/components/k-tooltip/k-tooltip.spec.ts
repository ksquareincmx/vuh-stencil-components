import { newSpecPage } from '@stencil/core/testing';
import { Tooltip } from './k-tooltip';

describe('k-tooltip', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Tooltip],
      html: '<k-tooltip></k-tooltip>'
    });

    expect(root).toEqualHtml(`
      <k-tooltip>
        <mock:shadow-root>
          <div class="KTooltip">
            <slot></slot>
            <span class="KTooltip-text bottom"></span>
          </div>
        </mock:shadow-root>
      </k-tooltip>
    `);
  });

  it('renders with props', async () => {
    const { root } = await newSpecPage({
      components: [Tooltip],
      html: `<k-tooltip text="tooltip" position="top"></k-tooltip>`
    });
    expect(root).toEqualHtml(`
      <k-tooltip text="tooltip" position="top">
        <mock:shadow-root>
          <div class="KTooltip">
            <slot></slot>
            <span class="KTooltip-text top">tooltip</span>
          </div>
        </mock:shadow-root>
      </k-tooltip>
    `);
  });
});
