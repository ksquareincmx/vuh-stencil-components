import {
  Component,
  Host,
  Prop,
  State,
  Listen,
  Element,
  Event,
  EventEmitter,
  h
} from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-table-row',
  styleUrl: 'k-table-row.scss',
  shadow: true
})
export class TableRow {
  private slotted: HTMLCollection;

  @Element() el!: HTMLElement;

  @Prop() type?: 'default' | 'header' | 'navbar' = 'default';

  @State() active: any | null;

  @Event() isTypeNavBar: EventEmitter<{
    navBarEl: HTMLElement;
  }>;

  // Sets the default attribute so that the DOM mutation can be observed:

  componentDidLoad() {
    this.slotted = this.el.children;

    for (let i = 0; i < this.slotted.length; i++) {
      if (
        this.slotted[i].hasAttribute('default') &&
        !this.slotted[i].hasAttribute('disabled')
      ) {
        this.slotted[i].setAttribute('default', '');
        break;
      }
    }
  }

  // Emits the component upwards if its type is 'navbar', so that it can be rendered outside of the scrollable wrapper.

  componentWillRender() {
    if (this.type === 'navbar') {
      this.isTypeNavBar.emit({
        navBarEl: this.el
      });
    }
  }

  // Listens for changes in the columns state,
  // and removes active and sortby attributes
  // as needed in the DOM:

  @Listen('activeChanged')
  activeChangedHandler(state) {
    const { id } = state.detail;
    this.slotted = this.el.children;

    for (let i = 0; i < this.slotted.length; i++) {
      if (this.slotted[i].attributes['id'].value !== id) {
        this.slotted[i].removeAttribute('active');
        this.slotted[i].setAttribute('sortby', 'none');
      }
    }
  }

  render() {
    return (
      <Host
        class={clsx('KTableRow', {
          'KTableRow-border': this.type === 'header'
        })}
      >
        <slot></slot>
      </Host>
    );
  }
}
