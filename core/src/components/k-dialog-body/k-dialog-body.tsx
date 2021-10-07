import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'k-dialog-body',
  styleUrl: 'k-dialog-body.scss',
  shadow: true
})
export class DialogBody {
  render() {
    return (
      <Host class="KDialogBody">
        <p>
          <slot></slot>
        </p>
      </Host>
    );
  }
}
