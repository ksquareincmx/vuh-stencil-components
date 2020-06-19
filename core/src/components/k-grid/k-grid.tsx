import { Component, h, Host, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-grid',
  styleUrl: 'k-grid.scss',
  shadow: true
})
export class KGrid {
  @Prop() fluid?: boolean = false;

  render() {
    return (
      <Host
        class={clsx('KGrid', {
          'KGrid--fluid': this.fluid
        })}
      >
        <slot />
      </Host>
    );
  }
}
