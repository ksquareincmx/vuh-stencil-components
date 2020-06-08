import { newSpecPage } from '@stencil/core/testing';
import { KButton } from './k-button';

describe('k-button', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [KButton],
      html: '<k-button></k-button>'
    });
    expect(root).toEqualHtml(`
      <k-button>
        <mock:shadow-root>
          <button>
            <slot>
              Default
            </slot>
          </button>
        </mock:shadow-root>
      </k-button>
    `);
  });

  it('should render with changed default text', async () => {
    const { root } = await newSpecPage({
      components: [KButton],
      html: '<k-button>Accept</k-button>'
    });
    expect(root).toEqualHtml(`
      <k-button>
        <mock:shadow-root>
          <button>
            <slot>
              Accept
            </slot>
          </button>
        </mock:shadow-root>
      </k-button>
    `);
  });
});
