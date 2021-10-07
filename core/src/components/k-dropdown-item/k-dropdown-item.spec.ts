import { newSpecPage } from '@stencil/core/testing';
import { DropdownItem } from './k-dropdown-item';

describe('k-dropdown-item', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [DropdownItem],
      html: '<k-dropdown-item></k-dropdown-item>'
    });
    expect(root).toEqualHtml(`
      <k-dropdown-item value="">
        <mock:shadow-root>
            <label class="KDropdownItem">
                <input class="KDropdownItem-input" type="radio" value="">
                <span class="KDropdownItem-text">
                    <slot>Default</slot>
                </span>
            </label>
        </mock:shadow-root>
      </k-dropdown-item>
    `);
  });

  it('should have an specified value', async () => {
    const { root } = await newSpecPage({
      components: [DropdownItem],
      html: '<k-dropdown-item value="hello"></k-dropdown-item>'
    });
    expect(root).toEqualHtml(`
      <k-dropdown-item value="hello">
        <mock:shadow-root>
            <label class="KDropdownItem">
                <input class="KDropdownItem-input" type="radio" value="hello">
                <span class="KDropdownItem-text">
                    <slot>Default</slot>
                </span>
            </label>
        </mock:shadow-root>
      </k-dropdown-item>
    `);
  });

  it('should have an specified name', async () => {
    const { root } = await newSpecPage({
      components: [DropdownItem],
      html: '<k-dropdown-item name="hello"></k-dropdown-item>'
    });
    expect(root).toEqualHtml(`
      <k-dropdown-item value="" name="hello">
        <mock:shadow-root>
            <label class="KDropdownItem">
                <input class="KDropdownItem-input" type="radio" value="" name="hello">
                <span class="KDropdownItem-text">
                    <slot>Default</slot>
                </span>
            </label>
        </mock:shadow-root>
      </k-dropdown-item>
    `);
  });

  it('should be disabled', async () => {
    const { root } = await newSpecPage({
      components: [DropdownItem],
      html: '<k-dropdown-item disabled></k-dropdown-item>'
    });
    expect(root).toEqualHtml(`
      <k-dropdown-item value="" disabled>
        <mock:shadow-root>
            <label class="KDropdownItem KDropdownItem-disabled">
                <input class="KDropdownItem-input" type="radio" value="" disabled>
                <span class="KDropdownItem-text">
                    <slot>Default</slot>
                </span>
            </label>
        </mock:shadow-root>
      </k-dropdown-item>
    `);
  });

  it('should be checked', async () => {
    const { root } = await newSpecPage({
      components: [DropdownItem],
      html: '<k-dropdown-item checked></k-dropdown-item>'
    });
    expect(root).toEqualHtml(`
      <k-dropdown-item value="" checked>
        <mock:shadow-root>
            <label class="KDropdownItem">
                <input class="KDropdownItem-input" type="radio" value="" checked>
                <span class="KDropdownItem-text">
                    <slot>Default</slot>
                </span>
            </label>
        </mock:shadow-root>
      </k-dropdown-item>
    `);
  });
});
