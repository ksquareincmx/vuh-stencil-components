import { Component, h, State, Prop, Watch } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-notification',
  styleUrl: 'k-notification.scss',
  shadow: true
})
export class Notification {
  private bell?: HTMLElement;
  @State() showNotificationList: boolean = false;
  @Prop() notificationCount: number = 0;
  @Prop() listStart?: 'left' | 'right' = 'right';

  @Watch('notificationCount')
  notificationHandler(newValue: number, oldValue: number) {
    if (newValue !== oldValue && this.notificationCount > 0) {
      this.bell.classList.add('animate');
    }
  }

  componentDidRender() {
    this.bell.addEventListener('animationend', () => {
      this.bell.classList.remove('animate');
    });
  }

  handleNotificationList = () => {
    if (this.showNotificationList) {
      this.showNotificationList = false;
    } else {
      this.showNotificationList = true;
    }
  };

  render() {
    return (
      <div class="KNotification">
        <button
          onClick={this.handleNotificationList}
          class={clsx('KNotification-button', {
            'KNotification--is-notified': this.notificationCount > 0,
            'KNotification-opened': this.showNotificationList
          })}
          data-count={this.notificationCount}
        >
          <k-icon
            ref={(el) => (this.bell = el)}
            name="notifications"
            size="medium"
            class="KNotification-bell"
          ></k-icon>
        </button>
        <div class="KNotification-container">
          <div
            class={clsx('KNotification-content', this.listStart,  {
              'KNotification-content--is-open': this.showNotificationList
            })}
          >
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }
}
