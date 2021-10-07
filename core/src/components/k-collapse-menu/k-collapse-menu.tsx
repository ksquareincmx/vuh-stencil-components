import { Component, Host, h, Element, State, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-collapse-menu',
  styleUrl: 'k-collapse-menu.scss',
  shadow: true
})
export class CollapseMenu {
  private menuEl?: HTMLElement;

  @Element() el?: HTMLElement;
  @State() children?: any;
  @State() showMenuList: boolean = false;
  @State() isOpenByClick: boolean = false;

  @Prop() position: 'right' | 'left' = 'right';

  componentDidRender() {
    if (this.el.children.length > 0) {
      this.children = this.el.children;
    }

    this.menuEl.addEventListener('mouseover', () => {
      this.showMenuList = true;
    });

    this.menuEl.addEventListener('mouseout', () => {
      if (!this.isOpenByClick) {
        this.showMenuList = false;
      }
    });
  }

  disconnectedCallback() {
    this.menuEl.removeEventListener('mouseover', null);
    this.menuEl.removeEventListener('mouseout', null);
  }

  renderParent() {
    return (
      <div
        onClick={this.handleOpenMenu.bind(this)}
        class="KCollapseMenu-parent"
        innerHTML={this.children?.namedItem('kCollapseParent')?.innerHTML}
      ></div>
    );
  }
  renderList() {
    return (
      <div
        onClick={this.handleCloseMenu.bind(this)}
        class={clsx(`KCollapseMenu-list KCollapseMenu-list-${this.position}`, {
          'KCollapseMenu-list--is-opened':
            this.showMenuList || this.isOpenByClick
        })}
        innerHTML={this.children?.namedItem('kCollapseList')?.innerHTML}
      ></div>
    );
  }

  handleOpenMenu() {
    this.isOpenByClick = !this.isOpenByClick;
  }

  handleCloseMenu() {
    this.showMenuList = false;
    this.isOpenByClick = false;
  }

  render() {
    return (
      <Host ref={(el) => (this.menuEl = el)} class="KCollapseMenu">
        {this.children?.length > 0 && this.renderParent()}
        {this.children?.length > 0 && this.renderList()}
      </Host>
    );
  }
}
