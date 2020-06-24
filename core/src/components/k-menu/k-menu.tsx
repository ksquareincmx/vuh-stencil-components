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

  // notification properties
  @Prop() notificationCount?: number = 0;

  // user-properties
  @Prop() userOptions?: boolean = true;
  @Prop() userPicture: string = '';
  @Prop() userName: string = '';

  // logo properties
  @Prop() logo: string = '';

  componentWillRender() {
    this.hasChildren = this.host.children.length > 0;
  }

  @Event() toggleMenu: EventEmitter<string>;
  openMenu() {
    this.toggleMenu.emit(this.menuKey);
  }

  render() {
    return (
      <Host>
        <div
          class={clsx('KMenu', {
            'KMenu--is-shadowed': !this.hasChildren
          })}
        >
          <button class="KMenu-burger-button" onClick={() => this.openMenu()}>
            <k-icon name="menu" size="medium"></k-icon>
          </button>
          <figure class="KMenu-logo">
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
          </div>
        </div>
        <div class="KMenu-nav">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
