import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'k-carousel-item',
  styleUrl: 'k-carousel-item.scss',
  shadow: true
})
export class CarouselItem {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
