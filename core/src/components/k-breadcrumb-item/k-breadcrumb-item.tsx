import { Component, Host, h, Prop, Element, State } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-breadcrumb-item',
  styleUrl: 'k-breadcrumb-item.scss',
  shadow: true
})
export class KBreadcrumbItem {
  @Element() el: HTMLElement;
  @State() isTheLast: boolean;

  @Prop() current: boolean = false;

  componentWillRender() {
    this.isTheLast = Boolean(this.el.getAttribute('last'));
  }

  render() {
    return (
      <Host class="KBreadcrumbItem">
        <div
          class={clsx('KBreadcrumbItem-link', {
            'KBreadcrumbItem-current': this.current,
            'KBreadcrumbItem-normal': !this.current
          })}
        >
          <slot></slot>
        </div>
        {!this.isTheLast && (
          <i class="KBreadcrumbItem-icon vuh-keyboard-arrow-right"></i>
        )}
      </Host>
    );
  }
}
