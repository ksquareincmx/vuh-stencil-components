import { Component, h } from '@stencil/core';

@Component({
  tag: 'k-list-item',
  styleUrl: 'k-list-item.scss',
  shadow: true
})
export class ListItem {
  render() {
    return (
      <li class="KListItem">
        <slot></slot>
      </li>
    );
  }
}
