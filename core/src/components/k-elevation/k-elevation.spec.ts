import { newSpecPage } from '@stencil/core/testing';
import { Elevation } from './k-elevation';

describe('k-elevation', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Elevation],
      html: '<k-elevation></k-elevation>'
    });

    expect(root).toEqualHtml(`
      <k-elevation>
        <mock:shadow-root>
          <div class="KElevation">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </k-elevation>
    `);
  });

  it('should render with border radius', async () => {
    const { root } = await newSpecPage({
      components: [Elevation],
      html: '<k-elevation radius="50%"></k-elevation>'
    });

    expect(root).toEqualHtml(`
      <k-elevation radius="50%">
        <mock:shadow-root>
          <div class="KElevation" style="border-radius: 50%">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </k-elevation>
    `);
  });
});
