import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'k-card',
  styleUrl: 'k-card.scss',
  shadow: true
})
export class KCard {
  render() {
    return (
      <Host class="KCard">
        <slot></slot>
      </Host>
    );
  }
}
