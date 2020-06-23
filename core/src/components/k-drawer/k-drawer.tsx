import { Component, h, Prop, State, Listen } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-drawer',
  styleUrl: 'k-drawer.scss',
  shadow: true
})
export class KDrawer {
  @State() body?: HTMLElement;
  @State() isOpen: boolean = false;
  @State() showSidenav: boolean = false;
  @Prop() forKey: string = 'key-menu';

  componentWillRender() {
    this.body = document.querySelector('body');
  }

  @Listen('toggleMenu', { target: 'window' })
  toggleMenuHandler(event) {
    const { detail } = event;
    if (detail === this.forKey) {
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
        class={clsx('KDrawer', {
          '--is-opened': this.isOpen
        })}
      >
        <div
          class={clsx('KDrawer-sidenav', {
            '--is-opened': this.showSidenav
          })}
        ></div>
      </div>
    );
  }
}
