import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'k-menu-nav',
  styleUrl: 'k-menu-nav.scss',
  shadow: true
})
export class MenuNav {
  render() {
    return (
      <Host id="kMenuNav">
        <slot></slot>
      </Host>
    );
  }
}
