import { newSpecPage } from '@stencil/core/testing';
import { StepperContent } from './k-stepper-content';

describe('k-stepper-content', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [StepperContent],
      html: '<k-stepper-content></k-stepper-content>'
    });

    expect(root).toEqualHtml(`
      <k-stepper-content id="KStepperContent" class="KStepperContent">
        <mock:shadow-root>
          <div class="KStepperContent-slide" style="transform: translateX(-0%);">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </k-stepper-content>
    `);
  });
});
