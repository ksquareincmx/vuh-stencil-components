import { newSpecPage } from '@stencil/core/testing';
import { Content } from './k-content';

describe('k-content', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [Content],
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
