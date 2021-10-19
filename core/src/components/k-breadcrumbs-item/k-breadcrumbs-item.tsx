import { Component, Host, h, Prop, Element, State } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-breadcrumbs-item',
  styleUrl: 'k-breadcrumbs-item.scss',
  shadow: true
})
export class BreadcrumbsItem {
  @Element() el: HTMLElement;
  @State() isTheLast: boolean;

  @Prop() current: boolean = false;

  componentWillRender() {
    this.isTheLast = Boolean(this.el.getAttribute('last'));
  }

  render() {
    return (
      <Host class="KBreadcrumbsItem">
        <div
          class={clsx('KBreadcrumbsItem-link', {
            'KBreadcrumbsItem-current': this.current,
            'KBreadcrumbsItem-normal': !this.current
          })}
        >
          <slot></slot>
        </div>
        {!this.isTheLast && (
          <i class="KBreadcrumbsItem-icon vuh-keyboard-arrow-right"></i>
        )}
      </Host>
    );
  }
}
