import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'k-tag',
  styleUrl: 'k-tag.scss',
  shadow: true
})
export class KTag {
  render() {
    return (
      <Host class="KTag">
        <slot></slot>
      </Host>
    );
  }
}
