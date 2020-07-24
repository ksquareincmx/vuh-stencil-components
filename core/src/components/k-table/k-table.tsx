import { Component, h, Host, State, Element } from '@stencil/core';

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

  componentWillRender() {
    this.slotted = this.el.children;
    const slottedColumns = this.slotted[0].children;
    let i;
    const columns = [];
    for (i = 0; i < slottedColumns.length; i++) {
      columns.push(Number(slottedColumns[i].attributes[0].value));
    }
    const totalColumns = String(columns.reduce((a, b) => a + b, 0));
    this.tableWrapper?.style.setProperty('--data-count', totalColumns);
  }

  render() {
    return (
      <Host class="KTable">
        <div
          ref={(el: HTMLElement) => (this.tableWrapper = el)}
          class="KTable-wrapper"
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
