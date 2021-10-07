import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'k-dialog-content',
  styleUrl: 'k-dialog-content.scss',
  shadow: true
})
export class DialogContent {
  render() {
    return (
      <Host id="KDialogContent" class="KDialogContent">
        <slot></slot>
      </Host>
    );
  }
}
