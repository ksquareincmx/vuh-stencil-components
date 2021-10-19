import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'k-snackbar',
  styleUrl: 'k-snackbar.scss',
  shadow: true
})
export class Snackbar {
  @Prop() text: string = '';
  render() {
    return (
      <Host class="KSnackbar">
        <p class="KSnackbar-text">{this.text}</p>
        <slot></slot>
      </Host>
    );
  }
}
