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

  @Prop() sizeSm?: 'col-sm-1' | 'col-sm-2' | 'col-sm-3' | 'col-sm-4';

  @Prop() sizeMd?:
    | 'col-md-1'
    | 'col-md-2'
    | 'col-md-3'
    | 'col-md-4'
    | 'col-md-5'
    | 'col-md-6'
    | 'col-md-7'
    | 'col-md-8';

  @Prop() sizeLg?:
    | 'col-lg-1'
    | 'col-lg-2'
    | 'col-lg-3'
    | 'col-lg-4'
    | 'col-lg-5'
    | 'col-lg-6'
    | 'col-lg-7'
    | 'col-lg-8'
    | 'col-lg-9'
    | 'col-lg-10'
    | 'col-lg-11'
    | 'col-lg-12';

  @Prop() color?: string;

  render() {
    return (
      <Host
        class={`KColumn ${this.size ? 'KColumn--' + this.size : ''} ${
          this.sizeSm ? 'KColumn--' + this.sizeSm : ''
        } ${this.sizeMd ? 'KColumn--' + this.sizeMd : ''} ${
          this.sizeLg ? 'KColumn--' + this.sizeLg : ''
        }`}
      >
        <p class={`KColumn-content`}>
          <slot />
        </p>
      </Host>
    );
  }
}
