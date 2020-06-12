import { Component, h } from '@stencil/core';

@Component({
  tag: 'k-label',
  styleUrl: 'k-label.scss',
  shadow: true
})
export class KTagLabel {
  render() {
    return (
      <label>
        <slot></slot>
      </label>
    );
  }
}
