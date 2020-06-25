import { Component, h } from '@stencil/core';

@Component({
  tag: 'k-notification-group',
  styleUrl: 'k-notification-group.scss',
  shadow: true
})
export class KNotificationGroup {
  render() {
    return (
      <div class="KNotificationGroup">
        <slot></slot>
      </div>
    );
  }
}
