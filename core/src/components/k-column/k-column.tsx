import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'k-column',
  styleUrl: 'k-column.scss',
  shadow: true
})
export class KColumn {
  @Prop() fluid?: boolean = false;

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

  @Prop() sizesm?:
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

  @Prop() sizemd?:
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

  @Prop() sizelg?:
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

  @Prop() sizexl?:
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
        class={`KColumn ${this.fluid ? 'KColumn--fluid' : ''} ${
          this.size ? 'KColumn--col-' + this.size : ''
        } ${this.sizesm ? 'KColumn--col-sm-' + this.sizesm : ''} ${
          this.sizemd ? 'KColumn--col-md-' + this.sizemd : ''
        } ${this.sizelg ? 'KColumn--col-lg-' + this.sizelg : ''} ${
          this.sizexl ? 'KColumn--col-xl-' + this.sizexl : ''
        }`}
      >
        <div class={`KColumn-content`}>
          <slot />
        </div>
      </Host>
    );
  }
}
