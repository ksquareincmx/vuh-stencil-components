import { Component, h, Host, Prop, Element } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-banner',
  styleUrl: 'k-banner.scss',
  shadow: true
})
export class KBanner {
  @Element() el: HTMLElement;
  @Prop() type: 'success' | 'error' = 'success';

  private isSuccess = () => {
    return this.type === 'success';
  };

  private isError = () => {
    return this.type === 'error';
  };

  private renderP = () => {
    if (this.el.children.item(0)?.tagName === 'K-BANNER-TEXT') {
      return this.el.children.item(0)?.innerHTML;
    } else {
      return this.el.children.item(1)?.innerHTML;
    }
  };

  private renderButton = () => {
    if (this.el.children.item(0)?.tagName === 'K-BUTTON') {
      this.el.children.item(0)?.setAttribute('slot', 'button');
      return this.el.children.item(0)?.outerHTML;
    } else {
      this.el.children.item(1)?.setAttribute('slot', 'button');
      return this.el.children.item(1)?.outerHTML;
    }
  };

  componentWillRender() {
    this.renderButton();
  }

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
        <label class="KBanner-text">{this.renderP()}</label>
        <div class="KBanner-action">
          <slot name="button"></slot>
        </div>
      </Host>
    );
  }
}
