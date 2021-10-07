import { Component, h } from '@stencil/core';

@Component({
  tag: 'k-divider',
  styleUrl: 'k-divider.scss',
  shadow: true
})
export class Divider {
  render() {
    return <div class="KDivider"></div>;
  }
}
