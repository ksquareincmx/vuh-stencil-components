import {
  Component,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Host,
  Element
} from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-menu',
  styleUrl: 'k-menu.scss',
  shadow: true
})
export class KMenu {
  @Element() host: HTMLElement;
  @State() hasChildren?: boolean;

  @Prop() menuKey: string = '';
  @Prop() hideDrawerXs: boolean = false;
  @Prop() hideDrawerSm: boolean = false;
  @Prop() hideDrawerMd: boolean = false;
  @Prop() hideDrawerLg: boolean = false;
  @Prop() hideDrawerXl: boolean = false;
  @Prop() disableDrawer: boolean = false;

  // notification properties
  // @Prop() notificationCount?: number = 0;

  // user-properties
  // @Prop() userOptions?: boolean = true;
  // @Prop() userPicture: string = '';
  // @Prop() userName: string = '';

  // logo properties
  // @Prop() logo: string = '';

  componentWillRender() {
    this.hasChildren = this.host.children.length > 0;
  }

  @Event() toggleMenu: EventEmitter<{
    id: string;
    hideDrawerXs: boolean;
    hideDrawerSm: boolean;
    hideDrawerMd: boolean;
    hideDrawerLg: boolean;
    hideDrawerXl: boolean;
  }>;
  openMenu() {
    this.toggleMenu.emit({
      id: this.menuKey,
      hideDrawerXs: this.hideDrawerXs,
      hideDrawerSm: this.hideDrawerSm,
      hideDrawerMd: this.hideDrawerMd,
      hideDrawerLg: this.hideDrawerLg,
      hideDrawerXl: this.hideDrawerXl
    });
  }

  render() {
    return (
      <Host>
        <div
          class={clsx('KMenu', {
            'KMenu--is-shadowed': !this.hasChildren
          })}
        >
          <button
            class={clsx(
              'KMenu-burger-button',
              [this.hideDrawerXs && 'KMenu-burger-hide-xs'],
              [this.hideDrawerSm && 'KMenu-burger-hide-sm'],
              [this.hideDrawerMd && 'KMenu-burger-hide-md'],
              [this.hideDrawerLg && 'KMenu-burger-hide-lg'],
              [this.hideDrawerXl && 'KMenu-burger-hide-xl'],
              [this.disableDrawer && 'KMenu-burger-disable']
            )}
            onClick={() => this.openMenu()}
          >
            <k-icon name="menu" size="medium"></k-icon>
          </button>
          {/* <figure class="KMenu-logo">
            <k-img src={this.logo} alt="Logo" height={32}></k-img>
          </figure>
          <div
            class={clsx('KMenu-user', {
              'KMenu-user--is-disabled': !this.userOptions
            })}
          >
            <k-notification
              notificationCount={this.notificationCount}
            ></k-notification>
            <k-avatar class="KMenu-user-avatar">
              <k-img alt="Profile" src={this.userPicture}></k-img>
            </k-avatar>
          </div> */}
        </div>
        {/* <div class="KMenu-nav">
          <slot></slot>
        </div> */}
      </Host>
    );
  }
}
