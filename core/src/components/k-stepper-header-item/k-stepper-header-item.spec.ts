import { newSpecPage } from '@stencil/core/testing';
import { StepperHeaderItem } from './k-stepper-header-item';

describe('k-stepper-header-item', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [StepperHeaderItem],
      html: '<k-stepper-header-item></k-stepper-header-item>'
    });
    expect(root).toEqualHtml(`
      <k-stepper-header-item id="KStepperHeaderItem" class="KStepperHeaderItem">
        <mock:shadow-root>
          <div class="KStepperHeaderItem-line"></div>
          <div class="KStepperHeaderItem-step">
            <div class="KStepperHeaderItem-flip-box">
              <div class="KStepperHeaderItem-flip-box-inner">
                <a href="#" class="KStepperHeaderItem-button front">
                  0
                </a>
                <a href="#" class="KStepperHeaderItem-button back">
                  <i class="vuh-edit"></i>
                </a>
              </div>
            </div>
            <div class="KStepperHeaderItem-label">
              <slot></slot>
            </div>
          </div>
          <div class="KStepperHeaderItem-line"></div>
        </mock:shadow-root>
      </k-stepper-header-item>
    `);
  });

  it('should be done', async () => {
    const { root } = await newSpecPage({
      components: [StepperHeaderItem],
      html: '<k-stepper-header-item done></k-stepper-header-item>'
    });
    expect(root).toEqualHtml(`
      <k-stepper-header-item done id="KStepperHeaderItem" class="KStepperHeaderItem">
        <mock:shadow-root>
          <div class="KStepperHeaderItem-line"></div>
          <div class="KStepperHeaderItem-step">
            <div class="KStepperHeaderItem-flip-box editable">
              <div class="KStepperHeaderItem-flip-box-inner">
                <a href="#" class="KStepperHeaderItem-button front ended">
                  <i class="vuh-done"></i>
                </a>
                <a href="#" class="KStepperHeaderItem-button back">
                  <i class="vuh-edit"></i>
                </a>
              </div>
            </div>
            <div class="KStepperHeaderItem-label bolder">
              <slot></slot>
            </div>
          </div>
          <div class="KStepperHeaderItem-line"></div>
        </mock:shadow-root>
      </k-stepper-header-item>
    `);
  });

  it('should be started', async () => {
    const { root } = await newSpecPage({
      components: [StepperHeaderItem],
      html: '<k-stepper-header-item started></k-stepper-header-item>'
    });
    expect(root).toEqualHtml(`
      <k-stepper-header-item started id="KStepperHeaderItem" class="KStepperHeaderItem">
        <mock:shadow-root>
          <div class="KStepperHeaderItem-line"></div>
          <div class="KStepperHeaderItem-step">
            <div class="KStepperHeaderItem-flip-box">
              <div class="KStepperHeaderItem-flip-box-inner">
                <a href="#" class="KStepperHeaderItem-button front started">
                  0
                </a>
                <a href="#" class="KStepperHeaderItem-button back">
                  <i class="vuh-edit"></i>
                </a>
              </div>
            </div>
            <div class="KStepperHeaderItem-label bolder">
              <slot></slot>
            </div>
          </div>
          <div class="KStepperHeaderItem-line"></div>
        </mock:shadow-root>
      </k-stepper-header-item>
    `);
  });
});
