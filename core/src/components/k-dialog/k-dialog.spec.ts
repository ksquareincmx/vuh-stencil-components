import { newSpecPage } from '@stencil/core/testing';
import { KDialog } from './k-dialog';

describe('k-dialog', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [KDialog],
      html: '<k-dialog></k-dialog>'
    });

    expect(root).toEqualHtml(`
      <k-dialog class="KDialog">
        <mock:shadow-root>
          <slot name="content"></slot>
          <slot name="actions"></slot>
        </mock:shadow-root>
      </k-dialog>
    `);
  });
});
