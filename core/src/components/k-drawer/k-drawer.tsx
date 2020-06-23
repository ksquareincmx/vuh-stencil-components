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

  // user-properties
  @Prop() userOptions?: boolean = true;
  @Prop() userPicture: string = '';
  @Prop() userName: string = '';

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
          'KDrawer--is-opened': this.isOpen
        })}
      >
        <div
          class={clsx('KDrawer-sidenav', {
            'KDrawer-sidenav--is-opened': this.showSidenav
          })}
        >
          <div
            class={clsx('KDrawer-user', {
              'KDrawer-user--is-disabled': !this.userOptions
            })}
          >
            <div class="KDrawer-user-avatar">
              <k-avatar class="KMenu-user-avatar">
                <k-img alt="Profile" src={this.userPicture}></k-img>
              </k-avatar>
              <span>{this.userName}</span>
            </div>
          </div>
          {!this.userOptions && <div class="KDrawer-space"></div>}
          <div class="KDrawer-items">
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }
}
