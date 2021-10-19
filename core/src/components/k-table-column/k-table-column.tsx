import { Component, h, Host, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-table-column',
  styleUrl: 'k-table-column.scss',
  shadow: true
})
export class TableColumn {
  @Prop() size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' =
    '1';

  render() {
    return (
      <Host
        class={clsx('KTableColumn', [
          this.size && `KTableColumn--col-${this.size}`
        ])}
      >
        <div class={`KTableColumn-content`}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
