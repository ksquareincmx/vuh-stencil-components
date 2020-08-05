import { Component, h, Host, State, Listen, Element } from '@stencil/core';

@Component({
  tag: 'k-table',
  styleUrl: 'k-table.scss',
  shadow: true
})
export class KTable {
  private slotted: HTMLCollection;

  @Element() el?: HTMLElement;
  @State() maxRows?: '25' | '50' | '100' | '250' = '25';
  @State() tableWrapper?: HTMLElement;
  @State() navBarWrapper?: HTMLElement;

  private setDataCount() {
    this.slotted = this.el.children;
    let slottedColumns;
    const columns = [];
    for (let i = 0; this.slotted.length; i++) {
      if (
        this.slotted[i].attributes['type'] &&
        this.slotted[i].attributes['type'].value === 'header'
      ) {
        slottedColumns = this.slotted[i].children;
        break;
      }
    }
    for (let l = 0; l < slottedColumns.length; l++) {
      columns.push(Number(slottedColumns[l].attributes['size'].value));
    }
    const totalColumns = String(columns.reduce((a, b) => a + b, 0));
    this.tableWrapper?.style.setProperty('--data-count', totalColumns);
  }

  componentWillRender() {
    this.setDataCount();
  }

  @Listen('sizeChanged')
  sizeChangedHandler(state) {
    const { sizeHasChanged } = state.detail;
    if (sizeHasChanged) {
      this.setDataCount();
    }
  }

  @Listen('isTypeNavBar')
  isTypeNavBarHandler(state) {
    const { navBarEl } = state.detail;
    this.navBarWrapper.appendChild(navBarEl);
  }

  render() {
    return (
      <Host class="KTable">
        <div
          ref={(el: HTMLElement) => (this.navBarWrapper = el)}
          class="KTable-navbar"
        ></div>
        <div class="KTable-container">
          <div
            ref={(el: HTMLElement) => (this.tableWrapper = el)}
            class="KTable-wrapper"
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
