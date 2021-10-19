import { Component, Host, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'k-stepper-content',
  styleUrl: 'k-stepper-content.scss',
  shadow: true
})
export class StepperContent {
  @State() translate: number = 0;

  @Listen('stepClicked', { target: 'window' })
  handleStepClick(ev) {
    const { translate } = ev?.detail;
    this.translate = translate;
  }

  render() {
    return (
      <Host id="KStepperContent" class="KStepperContent">
        <div
          class="KStepperContent-slide"
          style={{ transform: `translateX(-${this.translate}%)` }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
