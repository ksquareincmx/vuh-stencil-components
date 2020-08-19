import { newSpecPage } from '@stencil/core/testing';
import { KContent } from './k-content';

describe('k-content', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [KContent],
      html: '<k-content></k-content>'
    });

    expect(root).toEqualHtml(`
      <k-content>
        <div class="KContent">
        </div>
      </k-content>
    `);
  });
});
