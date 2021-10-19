import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'k-breadcrumbs',
  styleUrl: 'k-breadcrumbs.scss',
  shadow: true
})
export class Breadcrumbs {
  @Element() el: HTMLElement;

  componentWillRender() {
    const elCount = this.el.children.length;
    elCount > 0 && this.el.children[elCount - 1].setAttribute('last', 'true');
  }

  render() {
    return (
      <Host class="KBreadcrumbs">
        <slot></slot>
      </Host>
    );
  }
}
