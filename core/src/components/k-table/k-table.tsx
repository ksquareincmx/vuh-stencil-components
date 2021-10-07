import { Component, h, State, Host, Listen, Element } from '@stencil/core';

@Component({
  tag: 'k-table',
  styleUrl: 'k-table.scss',
  shadow: true
})
export class Table {
  private slotted: HTMLCollection;

  @Element() el?: HTMLElement;
  @State() tableWrapper?: HTMLElement;

  private setDataCount() {
    this.slotted = this.el.children;
    let slottedColumns;
    const columns = [];
    for (let i = 0; i < this.slotted.length; i++) {
      if (
        this.slotted[i].attributes['type'] &&
        this.slotted[i].attributes['type'].value === 'header'
      ) {
        slottedColumns = this.slotted[i].children;
        break;
      }
    }
    for (let l = 0; l < slottedColumns?.length; l++) {
      columns.push(Number(slottedColumns[l].attributes['size'].value));
    }
    const totalColumns = String(columns.reduce((a, b) => a + b, 0));
    this.tableWrapper?.style.setProperty('--data-count', totalColumns);
  }

  private renderNavbar = () => {
    this.slotted = this.el.children;
    for (let i = 0; i < this.slotted.length; i++) {
      if (
        this.slotted[i].attributes['type'] &&
        this.slotted[i].attributes['type'].value === 'navbar'
      ) {
        this.slotted[i].setAttribute('slot', 'navbar');
        return this.slotted[i].outerHTML;
      }
    }
  };

  componentWillRender() {
    this.setDataCount();
    this.renderNavbar();
  }

  @Listen('sizeChanged')
  sizeChangedHandler(state) {
    const { sizeHasChanged } = state.detail;
    if (sizeHasChanged) {
      this.setDataCount();
    }
  }

  render() {
    return (
      <Host class="KTable">
        <div class="KTable-navbar">
          <slot name="navbar"></slot>
        </div>
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
