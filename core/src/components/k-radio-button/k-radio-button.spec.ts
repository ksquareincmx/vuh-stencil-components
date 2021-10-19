import { newSpecPage } from '@stencil/core/testing';
import { RadioButton } from './k-radio-button';

describe('k-radio-button', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [RadioButton],
      html: '<k-radio-button></k-radio-button>'
    });

    expect(root).toEqualHtml(`
      <k-radio-button id="rb-0" value="rb-0">
        <mock:shadow-root>
          <label class="KRadioButton" htmlfor="rb-0-input">
            <input
              id="rb-0-input"
              class="KRadioButton-input"
              type="radio"
              value="rb-0"
            />
            <span class="KRadioButton-checkmark">
              <span class="KRadioButton-dot"></span>
            </span>
            <span class="KRadioButton-label">
              <slot>Default</slot>
            </span>
          </label>
        </mock:shadow-root>
      </k-radio-button>
    `);
  });

  it('should be disabled', async () => {
    const { root } = await newSpecPage({
      components: [RadioButton],
      html: '<k-radio-button disabled></k-radio-button>'
    });

    expect(root).toEqualHtml(`
      <k-radio-button id="rb-1" value="rb-1" disabled>
        <mock:shadow-root>
          <label class="KRadioButton KRadioButton-disabled" htmlfor="rb-1-input">
            <input
              id="rb-1-input"
              class="KRadioButton-input"
              type="radio"
              value="rb-1"
              disabled
            />
            <span class="KRadioButton-checkmark">
              <span class="KRadioButton-dot"></span>
            </span>
            <span class="KRadioButton-label">
              <slot>Default</slot>
            </span>
          </label>
        </mock:shadow-root>
      </k-radio-button>
    `);
  });

  it('should be checked', async () => {
    const { root } = await newSpecPage({
      components: [RadioButton],
      html: '<k-radio-button checked></k-radio-button>'
    });

    expect(root).toEqualHtml(`
      <k-radio-button id="rb-2" value="rb-2" checked>
        <mock:shadow-root>
          <label class="KRadioButton" htmlfor="rb-2-input">
            <input
              id="rb-2-input"
              class="KRadioButton-input"
              type="radio"
              value="rb-2"
              checked
            />
            <span class="KRadioButton-checkmark">
              <span class="KRadioButton-dot"></span>
            </span>
            <span class="KRadioButton-label">
              <slot>Default</slot>
            </span>
          </label>
        </mock:shadow-root>
      </k-radio-button>
    `);
  });

  it('value should be "init"', async () => {
    const { root } = await newSpecPage({
      components: [RadioButton],
      html: '<k-radio-button value="init"></k-radio-button>'
    });

    expect(root).toEqualHtml(`
      <k-radio-button id="rb-3" value="init">
        <mock:shadow-root>
          <label class="KRadioButton" htmlfor="rb-3-input">
            <input
              id="rb-3-input"
              class="KRadioButton-input"
              type="radio"
              value="init"
            />
            <span class="KRadioButton-checkmark">
              <span class="KRadioButton-dot"></span>
            </span>
            <span class="KRadioButton-label">
              <slot>Default</slot>
            </span>
          </label>
        </mock:shadow-root>
      </k-radio-button>
    `);
  });
});
