import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'k-column',
  styleUrl: 'k-column.scss',
  shadow: true
})
export class KColumn {
  @Prop() size?:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12';

  @Prop() sizeSm?: '1' | '2' | '3' | '4';

  @Prop() sizeMd?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

  @Prop() sizeLg?:
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12';

  @Prop() color?: string;

  render() {
    return (
      <Host
        class={`KColumn ${this.size ? 'KColumn--col-' + this.size : ''} ${
          this.sizeSm ? 'KColumn--col-sm-' + this.sizeSm : ''
        } ${this.sizeMd ? 'KColumn--col-md-' + this.sizeMd : ''} ${
          this.sizeLg ? 'KColumn--col-lg-' + this.sizeLg : ''
        }`}
      >
        <p class={`KColumn-content`}>
          <slot />
        </p>
      </Host>
    );
  }
}
