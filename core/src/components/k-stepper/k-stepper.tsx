import { Component, Host, h, Element, State } from '@stencil/core';

@Component({
  tag: 'k-stepper',
  styleUrl: 'k-stepper.scss',
  shadow: true
})
export class Stepper {
  @Element() el: HTMLElement;
  @State() children?: any;

  componentWillRender() {
    this.children = this.el.children;
  }

  componentDidRender() {
    if (this.children.length > 0) {
      this.children.namedItem('KStepperHeader')?.setAttribute('slot', 'header');
      this.children
        .namedItem('KStepperContent')
        ?.setAttribute('slot', 'content');
    }
  }

  render() {
    return (
      <Host class="KStepper">
        <slot name="header"></slot>
        <slot name="content"></slot>
      </Host>
    );
  }
}
