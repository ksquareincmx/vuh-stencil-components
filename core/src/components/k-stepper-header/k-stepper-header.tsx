import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'k-stepper-header',
  styleUrl: 'k-stepper-header.scss',
  shadow: true
})
export class StepperHeader {
  @Element() el: HTMLElement;

  componentWillRender() {
    Array.from(this.el.children).forEach((child, index) => {
      child.setAttribute('step', String(index + 1));
      if (index === this.el.children.length - 1) {
        child.setAttribute('last', 'true');
      }
    });
  }

  render() {
    return (
      <Host id="KStepperHeader" class="KStepperHeader">
        <slot></slot>
      </Host>
    );
  }
}
