import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'k-container',
  styleUrl: 'k-container.scss',
  shadow: true
})
export class KContainer {
  @Prop() fluid?: boolean = false;

  render() {
    return (
      <Host class={`KContainer ${this.fluid ? 'KContainer--fluid' : ''}`}>
        <slot />
      </Host>
    );
  }
}
