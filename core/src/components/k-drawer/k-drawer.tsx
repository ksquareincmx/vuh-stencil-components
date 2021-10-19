import { Component, h, Prop, State, Listen } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-drawer',
  styleUrl: 'k-drawer.scss',
  shadow: true
})
export class Drawer {
  @State() body?: HTMLElement;
  @State() isOpen: boolean = false;
  @State() showSidenav: boolean = false;
  @State() drawer: any = {};

  @Prop() forKey: string = 'default-key';

  componentWillRender() {
    this.body = document.querySelector('body');
  }

  @Listen('toggleMenu', { target: 'window' })
  toggleMenuHandler(event) {
    const { detail } = event;

    this.drawer = {
      ...detail
    };

    delete this.drawer.id;

    if (detail.id === this.forKey) {
      this.isOpen = true;
      setTimeout(() => {
        this.showSidenav = true;
      }, 100);
      this.body.style.overflow = 'hidden';
    }
  }

  @Listen('click')
  clickHandler() {
    this.body.style.overflow = 'auto';
    this.isOpen = false;
    this.showSidenav = false;
  }

  render() {
    return (
      <div
        class={clsx(
          'KDrawer',
          {
            'KDrawer--is-opened': this.isOpen
          },
          [this.drawer.hideDrawerXs && 'KDrawer--is-hidden-xs'],
          [this.drawer.hideDrawerSm && 'KDrawer--is-hidden-sm'],
          [this.drawer.hideDrawerMd && 'KDrawer--is-hidden-md'],
          [this.drawer.hideDrawerLg && 'KDrawer--is-hidden-lg'],
          [this.drawer.hideDrawerXl && 'KDrawer--is-hidden-xl']
        )}
      >
        <div
          class={clsx(
            'KDrawer-sidenav',
            {
              'KDrawer-sidenav--is-opened': this.showSidenav
            },
            [this.drawer.hideDrawerXs && 'KDrawer--is-hidden-xs'],
            [this.drawer.hideDrawerSm && 'KDrawer--is-hidden-sm'],
            [this.drawer.hideDrawerMd && 'KDrawer--is-hidden-md'],
            [this.drawer.hideDrawerLg && 'KDrawer--is-hidden-lg'],
            [this.drawer.hideDrawerXl && 'KDrawer--is-hidden-xl']
          )}
        >
          <slot></slot>
        </div>
      </div>
    );
  }
}
