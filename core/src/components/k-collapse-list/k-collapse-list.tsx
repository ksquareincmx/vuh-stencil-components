import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'k-collapse-list',
  styleUrl: 'k-collapse-list.scss',
  shadow: true
})
export class KCollapseList {
  render() {
    return (
      <Host id="kCollapseList" class="KCollapseList">
        <slot></slot>
      </Host>
    );
  }
}
