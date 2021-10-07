import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'k-dialog-actions',
  styleUrl: 'k-dialog-actions.scss',
  shadow: true
})
export class DialogActions {
  render() {
    return (
      <Host id="KDialogActions" class="KDialogActions">
        <slot></slot>
      </Host>
    );
  }
}
