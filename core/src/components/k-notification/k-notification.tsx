import { Component, h, State, Prop, Watch } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-notification',
  styleUrl: 'k-notification.scss',
  shadow: true
})
export class KNotification {
  @State() bell?: HTMLElement;
  @Prop() notificationCount: number = 0;

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

  render() {
    return (
      <div
        class={clsx('KNotification', {
          'KNotification--is-notified': this.notificationCount > 0
        })}
        data-count={this.notificationCount}
      >
        <k-icon
          ref={(el) => (this.bell = el)}
          name="notifications"
          size="medium"
          class="KNotification-bell"
        ></k-icon>
      </div>
    );
  }
}
