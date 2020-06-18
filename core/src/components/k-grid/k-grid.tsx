import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'k-grid',
  styleUrl: 'k-grid.scss',
  shadow: true
})
export class KGrid {
  @Prop() fluid?: boolean = false;

  render() {
    return (
      <Host class={`KGrid ${this.fluid ? 'KGrid--fluid' : ''}`}>
        <slot />
      </Host>
    );
  }
}
