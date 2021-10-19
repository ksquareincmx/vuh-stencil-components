import { Component, h, Host, Prop, Element } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-banner',
  styleUrl: 'k-banner.scss',
  shadow: true
})
export class Banner {
  @Element() el: HTMLElement;
  @Prop() type: 'success' | 'error' = 'success';

  private isSuccess = () => {
    return this.type === 'success';
  };

  private isError = () => {
    return this.type === 'error';
  };

  render() {
    return (
      <Host class="KBanner">
        <i
          class={clsx('KBanner-icon', {
            'vuh-check-circle': this.isSuccess(),
            'vuh-alert-circle': this.isError(),
            '--is-success': this.isSuccess(),
            '--is-error': this.isError()
          })}
        ></i>
        <div class="KBanner-content">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
