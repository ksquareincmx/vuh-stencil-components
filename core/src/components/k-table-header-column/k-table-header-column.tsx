import {
  Component,
  h,
  Host,
  Event,
  EventEmitter,
  Watch,
  Element,
  Prop,
  State
} from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-table-header-column',
  styleUrl: 'k-table-header-column.scss',
  shadow: true
})
export class KTableHeaderColumn {
  private headerColumnId = `hc-${tableHeaderColumnIds++}`;
  private observer;

  @Element() el: HTMLElement;

  @Prop() size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10';
  @Prop() disabled?: boolean = false;

  @Prop() default: boolean = false;

  @State() sortBy: 'asc' | 'desc' | 'none' = 'none';
  @Prop({ mutable: true }) active?: boolean = false;

  @Event() activeChanged: EventEmitter<{
    id: String;
    active: any;
    sortBy: any;
  }>;

  @Watch('sortBy')
  onSortByChanged() {
    this.activeChanged.emit({
      id: this.headerColumnId,
      active: this.active,
      sortBy: this.sortBy
    });
  }

  private toggleSort = (e: Event) => {
    e.stopPropagation();
    if (!this.disabled) {
      if (this.sortBy === 'none') {
        this.active = true;
        this.sortBy = 'asc';
      } else if (this.sortBy === 'asc') {
        this.sortBy = 'desc';
      } else {
        this.active = false;
        this.sortBy = 'none';
      }
    }
  };

  // Updates the default column's state to match the DOM:

  componentDidLoad() {
    this.observer = new MutationObserver((mutationsList) => {
      // Use traditional 'for loops' for IE 11
      for (let mutation of mutationsList) {
        if (mutation.attributeName === 'default') {
          this.default = true;
          this.active = true;
          this.sortBy = 'asc';
        }

        if (mutation.attributeName === 'active') {
          if (mutation.target['active']) {
            this.active = true;
            this.sortBy = 'asc';
          } else {
            this.active = false;
            this.sortBy = 'none';
          }
        }
      }
    });

    // Start observing the target node for configured mutations
    this.observer.observe(this.el, { attributes: true });
  }

  disconnectedCallback() {
    this.observer.disconnect();
  }

  render() {
    return (
      <Host
        class={clsx('KTableHeaderColumn', [
          this.size && `KTableHeaderColumn--col-${this.size}`
        ])}
        id={this.headerColumnId}
        sortBy={this.sortBy}
        disabled={this.disabled}
        active={this.active}
        default={this.default}
      >
        <div class={`KTableHeaderColumn-content`}>
          <div class="KTableHeaderColumn-text">
            <slot></slot>
          </div>
          <div
            class={clsx('KTableHeaderColumn-icon', [
              this.disabled && '--is-disabled',
              this.sortBy === 'asc' && '--is-sorted-asc',
              this.sortBy === 'desc' && '--is-sorted-desc'
            ])}
            onClick={this.toggleSort}
          >
            <i class="vuh-swap-vert-up"></i>
            <i class="vuh-swap-vert-down"></i>
          </div>
        </div>
        <div class="KTableHeaderColumn-floating-text">{this.el.innerHTML}</div>
      </Host>
    );
  }
}

let tableHeaderColumnIds = 0;