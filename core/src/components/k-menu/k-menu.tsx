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
  @State() children?: any;

  @Prop() menuKey: string = '';
  @Prop() hideDrawerXs: boolean = false;
  @Prop() hideDrawerSm: boolean = false;
  @Prop() hideDrawerMd: boolean = false;
  @Prop() hideDrawerLg: boolean = false;
  @Prop() hideDrawerXl: boolean = false;
  @Prop() disableDrawer: boolean = false;

  componentWillRender() {
    this.children = this.host.children;
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

  componentDidRender() {
    this.hasChildren = this.children.namedItem('kMenuNav') !== null;
  }

  renderMenuContent() {
    return (
      <div
        class="KMenuContent"
        innerHTML={this.children.namedItem('kMenuContent')?.innerHTML}
      ></div>
    );
  }

  renderMenuNav() {
    return (
      <div
        class="KMenuNav"
        innerHTML={this.children.namedItem('kMenuNav')?.innerHTML}
      ></div>
    );
  }

  render() {
    return (
      <Host class="KMenu">
        <div
          class={clsx('KMenu-toolbar', {
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
          {this.renderMenuContent()}
        </div>
        {this.renderMenuNav()}
      </Host>
    );
  }
}
