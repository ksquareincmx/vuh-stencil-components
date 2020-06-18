import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'k-row',
  styleUrl: 'k-row.scss',
  shadow: true
})
export class KRow {
  render() {
    return (
      <Host class={`KRow`}>
        <slot />
      </Host>
    );
  }
}
