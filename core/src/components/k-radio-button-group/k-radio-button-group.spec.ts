import { newSpecPage } from '@stencil/core/testing';
import { RadioButtonGroup } from './k-radio-button-group';

describe('k-radio-button-group', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [RadioButtonGroup],
      html: '<k-radio-button-group></k-radio-button-group>'
    });

    expect(root).toEqualHtml(`
      <k-radio-button-group class="KRadioButtonGroup">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-radio-button-group>
    `);
  });
});
