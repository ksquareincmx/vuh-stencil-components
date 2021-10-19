import { newSpecPage } from '@stencil/core/testing';
import { DialogContent } from './k-dialog-content';

describe('k-dialog-content', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [DialogContent],
      html: '<k-dialog-content></k-dialog-content>'
    });

    expect(root).toEqualHtml(`
      <k-dialog-content id="KDialogContent" class="KDialogContent">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-dialog-content>
    `);
  });
});
