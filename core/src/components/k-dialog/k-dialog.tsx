import { Component, h, Host, Element } from '@stencil/core';

@Component({
  tag: 'k-dialog',
  styleUrl: 'k-dialog.scss',
  shadow: true
})
export class KDialog {
  @Element() el: HTMLElement;

  componentDidRender() {
    this.el.children
      .namedItem('KDialogContent')
      .setAttribute('slot', 'content');

    this.el.children
      .namedItem('KDialogActions')
      .setAttribute('slot', 'actions');
  }

  render() {
    return (
      <Host class="KDialog">
        <slot name="content"></slot>
        <slot name="actions"></slot>
      </Host>
    );
  }
}
