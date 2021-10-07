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
export class TableHeaderColumn {
  private headerColumnId = `hc-${tableHeaderColumnIds++}`;
  private observer;

  @Element() el: HTMLInputElement;

  @Prop() size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' =
    '1';
  @Prop() disabled?: boolean = false;
  @Prop() sortable?: boolean = true;

  @Prop() default: boolean = false;

  @Prop({ mutable: true }) active?: boolean = false;
  @State() sortBy: 'asc' | 'desc' | 'none' = 'none';
  @State() sizeHasChanged: boolean = false;

  @Event() activeChanged: EventEmitter<{
    id: String;
    active: any;
    sortBy: any;
  }>;

  @Event() sizeChanged: EventEmitter<{
    sizeHasChanged: boolean;
  }>;

  @Watch('sortBy')
  onSortByChanged() {
    this.activeChanged.emit({
      id: this.headerColumnId,
      active: this.active,
      sortBy: this.sortBy
    });
  }

  @Watch('size')
  onSizeChanged() {
    this.sizeHasChanged = true;
    this.sizeChanged.emit({
      sizeHasChanged: this.sizeHasChanged
    });
    this.sizeHasChanged = false;
  }

  private toggleSort = (e: Event) => {
    e.stopPropagation();
    if (!this.disabled) {
      if (this.sortBy === 'none') {
        this.active = true;
        this.sortBy = 'asc';
        this.el.value = this.sortBy;
        this.el.click();
      } else if (this.sortBy === 'asc') {
        this.sortBy = 'desc';
        this.el.value = this.sortBy;
        this.el.click();
      } else {
        this.active = false;
        this.sortBy = 'none';
        this.el.value = this.sortBy;
        this.el.click();
      }
    }
  };

  // Updates the default column's state to match the DOM:

  componentDidLoad() {
    if ('MutationObserver' in window) {
      this.observer = new window.MutationObserver((mutationsList) => {
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
          {this.sortable && (
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
          )}
        </div>
        <div class="KTableHeaderColumn-floating-text">{this.el.innerHTML}</div>
      </Host>
    );
  }
}

let tableHeaderColumnIds = 0;
