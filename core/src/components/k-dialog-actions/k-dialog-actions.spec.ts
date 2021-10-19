import { newSpecPage } from '@stencil/core/testing';
import { DialogActions } from './k-dialog-actions';

describe('k-dialog-actions', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [DialogActions],
      html: '<k-dialog-actions></k-dialog-actions>'
    });

    expect(root).toEqualHtml(`
      <k-dialog-actions id="KDialogActions" class="KDialogActions">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-dialog-actions>
    `);
  });
});
