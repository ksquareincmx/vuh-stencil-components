import { Component, h } from '@stencil/core';

@Component({
  tag: 'k-list-group',
  styleUrl: 'k-list-group.scss',
  shadow: true
})
export class ListGroup {
  render() {
    return (
      <ul class="KListGroup">
        <slot></slot>
      </ul>
    );
  }
}
