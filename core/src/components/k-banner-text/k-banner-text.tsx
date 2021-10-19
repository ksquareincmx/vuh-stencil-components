import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'k-banner-text',
  styleUrl: 'k-banner-text.scss',
  shadow: true
})
export class BannerText {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
