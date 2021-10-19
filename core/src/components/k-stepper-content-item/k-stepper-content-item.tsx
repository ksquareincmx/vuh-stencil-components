import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'k-stepper-content-item',
  styleUrl: 'k-stepper-content-item.scss',
  shadow: true
})
export class StepperContentItem {
  render() {
    return (
      <Host id="KStepperContentItem" class="KStepperContentItem">
        <slot></slot>
      </Host>
    );
  }
}
