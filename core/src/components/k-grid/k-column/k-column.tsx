import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'k-column',
  styleUrl: 'k-column.scss',
  shadow: true
})
export class KColumn {
  @Prop() size?:
    | 'col-1'
    | 'col-2'
    | 'col-3'
    | 'col-4'
    | 'col-5'
    | 'col-6'
    | 'col-7'
    | 'col-8'
    | 'col-9'
    | 'col-10'
    | 'col-11'
    | 'col-12';

  render() {
    return (
      <Host class={`${this.size ?? ''}`}>
        <slot />
      </Host>
    );
  }
}
