import { newSpecPage } from '@stencil/core/testing';
import { KStepperHeader } from './k-stepper-header';

describe('k-stepper-header', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [KStepperHeader],
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
