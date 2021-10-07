import { newSpecPage } from '@stencil/core/testing';
import { Button } from './k-button';

describe('k-button', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<k-button></k-button>'
    });
    expect(root).toEqualHtml(`
      <k-button>
        <mock:shadow-root>
          <button class="KButton primary smooth medium">
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
      components: [Button],
      html: '<k-button>Accept</k-button>'
    });
    expect(root).toEqualHtml(`
          <k-button>
            <mock:shadow-root>
              <button class="KButton primary smooth medium">
                <slot>
                  Default
                </slot>
              </button>
            </mock:shadow-root>
            Accept
          </k-button>
        `);
  });

  it('should be disabled', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<k-button disabled>text</k-button>'
    });
    expect(root).toEqualHtml(`
      <k-button disabled>
        <mock:shadow-root>
          <button class="KButton primary smooth medium" disabled>
            <slot>
              Default
            </slot>
          </button>
        </mock:shadow-root>
        text
      </k-button>
    `);
  });

  it('should render with props', async () => {
    const { root } = await newSpecPage({
      components: [Button],
      html: '<k-button elevation color="secondary" shape="round" size="large">text</k-button>'
    });
    expect(root).toEqualHtml(`
      <k-button elevation color="secondary" shape="round" size="large">
        <mock:shadow-root>
          <button class="KButton secondary round large elevation">
            <slot>
              Default
            </slot>
          </button>
        </mock:shadow-root>
        text
      </k-button>
    `);
  });
});
