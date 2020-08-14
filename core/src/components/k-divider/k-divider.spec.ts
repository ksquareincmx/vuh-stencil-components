import { newSpecPage } from '@stencil/core/testing';
import { KDivider } from './k-divider';

describe('k-divider', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [KDivider],
      html: '<k-divider></k-divider>'
    });

    expect(root).toEqualHtml(`
      <k-divider>
        <mock:shadow-root>
          <div class="KDivider"></div>
        </mock:shadow-root>
      </k-divider>
    `);
  });
});
