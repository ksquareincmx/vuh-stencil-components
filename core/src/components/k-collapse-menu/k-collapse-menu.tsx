import { Component, Host, h, Element, State, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-collapse-menu',
  styleUrl: 'k-collapse-menu.scss',
  shadow: true
})
export class KCollapseMenu {
  @Element() el?: HTMLElement;
  @State() children?: any;
  @State() hasContent: boolean = false;
  @State() showMenuList: boolean = false;

  @Prop() position: 'right' | 'left' = 'right';

  componentWillRender() {
    this.children = this.el.children;
  }

  componentDidRender() {
    this.hasContent =
      this.children.namedItem('kCollapseParent') !== null &&
      this.children.namedItem('kCollapseList') !== null;
  }

  renderParent() {
    return (
      <div
        class="KCollapseMenu-parent"
        innerHTML={this.children.namedItem('kCollapseParent')?.innerHTML}
      ></div>
    );
  }
  renderList() {
    return (
      <div
        class={clsx(`KCollapseMenu-list KCollapseMenu-list-${this.position}`, {
          'KCollapseMenu-list--is-opened': this.showMenuList
        })}
        innerHTML={this.children.namedItem('kCollapseList')?.innerHTML}
      ></div>
    );
  }

  handleOpenMenu() {
    this.showMenuList = !this.showMenuList;
  }

  render() {
    return (
      <Host
        class={clsx('KCollapseMenu', [!this.hasContent])}
        onClick={this.handleOpenMenu.bind(this)}
      >
        {this.renderParent()}
        {this.renderList()}
      </Host>
    );
  }
}
