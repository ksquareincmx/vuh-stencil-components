import { newSpecPage } from '@stencil/core/testing';
import { StepperHeader } from './k-stepper-header';

describe('k-stepper-header', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [StepperHeader],
      html: '<k-stepper-header></k-stepper-header>'
    });

    expect(root).toEqualHtml(`
      <k-stepper-header id="KStepperHeader" class="KStepperHeader">
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </k-stepper-header>
    `);
  });
});
