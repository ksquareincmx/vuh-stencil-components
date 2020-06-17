import { Component, h } from '@stencil/core';

@Component({
  tag: 'k-content',
  styleUrl: 'k-content.scss'
})
export class KContent {
  render() {
    return (
      <div class="KContent">
        <slot></slot>
      </div>
    );
  }
}
