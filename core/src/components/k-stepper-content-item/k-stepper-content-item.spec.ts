import { newSpecPage } from '@stencil/core/testing';
import { StepperContentItem } from './k-stepper-content-item';

describe('k-stepper-content-item', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [StepperContentItem],
      html: '<k-stepper-content-item></k-stepper-content-item>'
    });

    expect(root).toEqualHtml(`
      <k-stepper-content-item id="KStepperContentItem" class="KStepperContentItem">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-stepper-content-item>
    `);
  });
});
