import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'k-menu-content',
  styleUrl: 'k-menu-content.scss',
  shadow: true
})
export class MenuContent {
  render() {
    return (
      <Host id="kMenuContent" class="KMenuContent">
        <slot></slot>
      </Host>
    );
  }
}
