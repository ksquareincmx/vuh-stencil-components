import { newSpecPage } from '@stencil/core/testing';
import { Snackbar } from './k-snackbar';

describe('k-snackbar', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [Snackbar],
      html: '<k-snackbar></k-snackbar>'
    });

    expect(root).toEqualHtml(`
      <k-snackbar class="KSnackbar">
        <mock:shadow-root>
          <p class="KSnackbar-text"></p>
          <slot></slot>
        </mock:shadow-root>
      </k-snackbar>
    `);
  });

  it('text should be "something was done"', async () => {
    const { root } = await newSpecPage({
      components: [Snackbar],
      html: '<k-snackbar text="something was done"></k-snackbar>'
    });

    expect(root).toEqualHtml(`
      <k-snackbar class="KSnackbar" text="something was done">
        <mock:shadow-root>
          <p class="KSnackbar-text">
            something was done
          </p>
          <slot></slot>
        </mock:shadow-root>
      </k-snackbar>
    `);
  });
});
