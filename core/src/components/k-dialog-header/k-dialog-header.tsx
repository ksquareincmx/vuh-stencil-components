import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'k-dialog-header',
  styleUrl: 'k-dialog-header.scss',
  shadow: true
})
export class DialogHeader {
  render() {
    return (
      <Host class="KDialogHeader">
        <h3>
          <slot></slot>
        </h3>
      </Host>
    );
  }
}
