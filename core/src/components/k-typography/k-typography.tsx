import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'k-typography',
  styleUrl: 'k-typography.scss',
  shadow: true
})
export class KTypography {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
