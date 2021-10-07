import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-notification-item',
  styleUrl: 'k-notification-item.scss',
  shadow: true
})
export class NotificationItem {
  @Prop() alertColor: string = '';
  @Prop() label: string = '';
  @Prop() time?: string = '';
  @Prop() isRead?: boolean = false;

  render() {
    return (
      <div class="KNotificationItem">
        <div class="KNotificationItem-header">
          <div class="KNotificationItem-header-left">
            <k-icon
              name="notifications-active"
              size="medium"
              style={{ color: this.alertColor }}
            ></k-icon>
            <span class="KNotificationItem-header-left-label">
              {this.label}
            </span>
            <span class="KNotificationItem-header-left-dot">•</span>
            <span class="KNotificationItem-header-left-time">{this.time}</span>
          </div>
          <div class="KNotificationItem-header-right">
            <k-icon
              class={clsx('KNotificationItem-header-right-icon', {
                '--read': this.isRead,
                '--unread': !this.isRead
              })}
              name={this.isRead ? 'remove-red-eye' : 'visibility-off'}
            ></k-icon>
            <span
              class={clsx('KNotificationItem-header-right-status', {
                '--read': this.isRead,
                '--unread': !this.isRead
              })}
            >
              {this.isRead ? 'Read' : 'Unread'}
            </span>
          </div>
        </div>
        <div class="KNotificationItem-content">
          <slot></slot>
        </div>
        <div class="KNotificationItem-divider"></div>
      </div>
    );
  }
}
