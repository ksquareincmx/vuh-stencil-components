import { newSpecPage } from '@stencil/core/testing';
import { DialogHeader } from './k-dialog-header';

describe('k-dialog-header', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [DialogHeader],
      html: '<k-dialog-header></k-dialog-header>'
    });
    expect(root).toEqualHtml(`
      <k-dialog-header class="KDialogHeader">
        <mock:shadow-root>
          <h3>
            <slot></slot>
          </h3>
        </mock:shadow-root>
      </k-dialog-header>
    `);
  });
});
