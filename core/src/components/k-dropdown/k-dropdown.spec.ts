import { newSpecPage } from '@stencil/core/testing';
import { Dropdown } from './k-dropdown';

describe('k-dropdown', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [Dropdown],
      html: '<k-dropdown></k-dropdown>'
    });
    expect(root).toEqualHtml(`
      <k-dropdown>
        <mock:shadow-root>
            <div class="KDropdown">
                <button class="KDropdown-dispatcher KDropdown-button primary">
                    <span>Default</span>
                    <i class="KDropdown-icon vuh-keyboard-arrow-down"></i>
                </button>
                <div class="KDropdown-options">
                    <slot></slot>
                </div>
            </div>
        </mock:shadow-root>
      </k-dropdown>
    `);
  });

  it('should be disabled', async () => {
    const { root } = await newSpecPage({
      components: [Dropdown],
      html: '<k-dropdown disabled></k-dropdown>'
    });
    expect(root).toEqualHtml(`
      <k-dropdown disabled>
        <mock:shadow-root>
            <div class="KDropdown">
                <button class="KDropdown-dispatcher KDropdown-button primary" disabled>
                    <span>Default</span>
                    <i class="KDropdown-icon vuh-keyboard-arrow-down"></i>
                </button>
                <div class="KDropdown-options">
                    <slot></slot>
                </div>
            </div>
        </mock:shadow-root>
      </k-dropdown>
    `);
  });

  it('should be variant input', async () => {
    const { root } = await newSpecPage({
      components: [Dropdown],
      html: '<k-dropdown variant="input"></k-dropdown>'
    });
    expect(root).toEqualHtml(`
      <k-dropdown variant="input">
        <mock:shadow-root>
            <div class="KDropdown">
                <button class="KDropdown-dispatcher KDropdown-input">
                    <span>Default</span>
                    <i class="KDropdown-icon vuh-keyboard-arrow-down"></i>
                </button>
                <div class="KDropdown-options">
                    <slot></slot>
                </div>
            </div>
        </mock:shadow-root>
      </k-dropdown>
    `);
  });

  it('should be variant table', async () => {
    const { root } = await newSpecPage({
      components: [Dropdown],
      html: '<k-dropdown variant="table"></k-dropdown>'
    });
    expect(root).toEqualHtml(`
      <k-dropdown variant="table">
        <mock:shadow-root>
            <div class="KDropdown">
                <button class="KDropdown-dispatcher KDropdown-table">
                    <span>Default</span>
                    <i class="KDropdown-icon vuh-keyboard-arrow-down"></i>
                </button>
                <div class="KDropdown-options">
                    <slot></slot>
                </div>
            </div>
        </mock:shadow-root>
      </k-dropdown>
    `);
  });

  it('should have an specified color', async () => {
    const { root } = await newSpecPage({
      components: [Dropdown],
      html: '<k-dropdown color="secondary"></k-dropdown>'
    });
    expect(root).toEqualHtml(`
      <k-dropdown color="secondary">
        <mock:shadow-root>
            <div class="KDropdown">
                <button class="KDropdown-dispatcher KDropdown-button secondary">
                    <span>Default</span>
                    <i class="KDropdown-icon vuh-keyboard-arrow-down"></i>
                </button>
                <div class="KDropdown-options">
                    <slot></slot>
                </div>
            </div>
        </mock:shadow-root>
      </k-dropdown>
    `);
  });

  it('should have a validation state if it is variant input', async () => {
    const { root } = await newSpecPage({
      components: [Dropdown],
      html: '<k-dropdown variant="input" validation-state="success"></k-dropdown>'
    });
    expect(root).toEqualHtml(`
      <k-dropdown variant="input" validation-state="success">
        <mock:shadow-root>
            <div class="KDropdown">
                <button class="KDropdown-dispatcher KDropdown-input --is-valid">
                    <span>Default</span>
                    <i class="KDropdown-icon vuh-keyboard-arrow-down"></i>
                </button>
                <div class="KDropdown-options">
                    <slot></slot>
                </div>
            </div>
        </mock:shadow-root>
      </k-dropdown>
    `);
  });

  it('should have a label if it is variant input or table', async () => {
    const { root } = await newSpecPage({
      components: [Dropdown],
      html: '<k-dropdown variant="input" label="Hello"></k-dropdown>'
    });
    expect(root).toEqualHtml(`
      <k-dropdown variant="input" label="Hello">
        <mock:shadow-root>
            <div class="KDropdown">
                <label class="KDropdown-label --is-input">
                    Hello
                </label>
                <button class="KDropdown-dispatcher KDropdown-input">
                    <span>Default</span>
                    <i class="KDropdown-icon vuh-keyboard-arrow-down"></i>
                </button>
                <div class="KDropdown-options">
                    <slot></slot>
                </div>
            </div>
        </mock:shadow-root>
      </k-dropdown>
    `);
  });

  it('should have a helper text if it is variant input', async () => {
    const { root } = await newSpecPage({
      components: [Dropdown],
      html: '<k-dropdown variant="input" helper-text="Hello"></k-dropdown>'
    });
    expect(root).toEqualHtml(`
      <k-dropdown variant="input" helper-text="Hello">
        <mock:shadow-root>
            <div class="KDropdown">
                <button class="KDropdown-dispatcher KDropdown-input">
                    <span>Default</span>
                    <i class="KDropdown-icon vuh-keyboard-arrow-down"></i>
                </button>
                <span class="KDropdown-input-helper-text">
                    Hello
                </span>
                <div class="KDropdown-options">
                    <slot></slot>
                </div>
            </div>
        </mock:shadow-root>
      </k-dropdown>
    `);
  });
});
