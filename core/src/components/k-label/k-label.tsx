import { Component, h } from '@stencil/core';

@Component({
  tag: 'k-label',
  styleUrl: 'k-label.scss',
  shadow: true
})
export class Label {
  render() {
    return (
      <label class="KLabel">
        <slot></slot>
      </label>
    );
  }
}
