import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'k-collapse-parent',
  styleUrl: 'k-collapse-parent.scss',
  shadow: true
})
export class KCollapseParent {
  render() {
    return (
      <Host id="kCollapseParent">
        <slot></slot>
      </Host>
    );
  }
}
