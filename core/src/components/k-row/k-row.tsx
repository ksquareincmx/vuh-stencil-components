import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'k-row',
  styleUrl: 'k-row.scss',
  shadow: true
})
export class KRow {
  @Prop() spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  render() {
    return (
      <Host
        class={`KRow ${this.spacing ? 'KRow--spacing-' + this.spacing : ''} `}
      >
        <slot></slot>
      </Host>
    );
  }
}
