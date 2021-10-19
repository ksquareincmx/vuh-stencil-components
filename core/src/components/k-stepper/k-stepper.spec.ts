import { newSpecPage } from '@stencil/core/testing';
import { Stepper } from './k-stepper';

describe('k-stepper', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [Stepper],
      html: '<k-stepper></k-stepper>'
    });

    expect(root).toEqualHtml(`
      <k-stepper class="KStepper">
        <mock:shadow-root>
          <slot name="header"></slot>
          <slot name="content"></slot>
        </mock:shadow-root>
      </k-stepper>
    `);
  });
});
