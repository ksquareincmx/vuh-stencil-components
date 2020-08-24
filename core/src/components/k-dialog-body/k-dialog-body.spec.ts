import { newSpecPage } from '@stencil/core/testing';
import { KDialogBody } from './k-dialog-body';

describe('k-dialog-body', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [KDialogBody],
      html: '<k-dialog-body></k-dialog-body>'
    });

    expect(root).toEqualHtml(`
      <k-dialog-body class="KDialogBody">
        <mock:shadow-root>
          <p>
            <slot></slot>
          </p>
        </mock:shadow-root>
      </k-dialog-body>
    `);
  });
});
