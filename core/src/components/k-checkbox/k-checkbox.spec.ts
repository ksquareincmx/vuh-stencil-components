import { newSpecPage } from '@stencil/core/testing';
import { Checkbox } from './k-checkbox';

describe('k-checkbox', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [Checkbox],
      html: '<k-checkbox></k-checkbox>'
    });
    expect(root).toEqualHtml(`
      <k-checkbox>
        <mock:shadow-root>
            <label class="KCheckbox">
                <input type="checkbox" class="KCheckbox-input"/>
                <span class="KCheckbox-checkmark">
                    <span class="KCheckbox-icon vuh-done"></span>
                </span>
                <span class="KCheckbox-label">
                    <slot></slot>
                </span>
            </label>
        </mock:shadow-root>
      </k-checkbox>
    `);
  });

  it('should be disabled', async () => {
    const { root } = await newSpecPage({
      components: [Checkbox],
      html: '<k-checkbox disabled></k-checkbox>'
    });
    expect(root).toEqualHtml(`
      <k-checkbox disabled>
        <mock:shadow-root>
            <label class="KCheckbox KCheckbox--disabled">
                <input disabled type="checkbox" class="KCheckbox-input"/>
                <span class="KCheckbox-checkmark">
                    <span class="KCheckbox-icon vuh-done"></span>
                </span>
                <span class="KCheckbox-label">
                    <slot></slot>
                </span>
            </label>
        </mock:shadow-root>
      </k-checkbox>
    `);
  });

  it('should be checked', async () => {
    const { root } = await newSpecPage({
      components: [Checkbox],
      html: '<k-checkbox checked></k-checkbox>'
    });
    expect(root).toEqualHtml(`
      <k-checkbox checked>
        <mock:shadow-root>
            <label class="KCheckbox">
                <input checked type="checkbox" class="KCheckbox-input"/>
                <span class="KCheckbox-checkmark">
                    <span class="KCheckbox-icon vuh-done"></span>
                </span>
                <span class="KCheckbox-label">
                    <slot></slot>
                </span>
            </label>
        </mock:shadow-root>
      </k-checkbox>
    `);
  });

  it('should have the "value" prop', async () => {
    const { root } = await newSpecPage({
      components: [Checkbox],
      html: '<k-checkbox value></k-checkbox>'
    });
    expect(root).toEqualHtml(`
      <k-checkbox value>
        <mock:shadow-root>
            <label class="KCheckbox">
                <input value type="checkbox" class="KCheckbox-input"/>
                <span class="KCheckbox-checkmark">
                    <span class="KCheckbox-icon vuh-done"></span>
                </span>
                <span class="KCheckbox-label">
                    <slot></slot>
                </span>
            </label>
        </mock:shadow-root>
      </k-checkbox>
    `);
  });
});
