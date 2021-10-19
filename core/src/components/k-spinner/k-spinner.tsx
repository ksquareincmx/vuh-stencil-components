import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'k-spinner',
  styleUrl: 'k-spinner.scss',
  shadow: true
})
export class Spinner {
  @State() htmlEl: HTMLElement;

  @Prop() size?: number = 50;
  @Prop() strong?: number = 6;
  @Prop() color?:
    | 'primary'
    | 'primary800'
    | 'primary700'
    | 'primary600'
    | 'primary500'
    | 'primary400'
    | 'primary300'
    | 'primary200'
    | 'primary100'
    | 'gray500'
    | 'gray400'
    | 'gray300'
    | 'gray200'
    | 'gray100'
    | 'gray50'
    | 'error200'
    | 'error100'
    | 'warning200'
    | 'warning100'
    | 'success200'
    | 'success100';

  render() {
    return (
      <div
        class="KSpinner"
        style={{ height: `${this.size}px`, width: `${this.size}px` }}
      >
        <div
          class={`KSpinner-before ${this.color ?? ''}`}
          style={{
            height: `${this.size}px`,
            borderWidth: `${this.strong}px 0 ${this.strong}px ${this.strong}px`
          }}
        ></div>
        <div
          class={`KSpinner-after ${this.color ?? ''}`}
          style={{
            height: `${this.size}px`,
            borderWidth: `${this.strong}px ${this.strong}px ${this.strong}px 0`
          }}
        ></div>
      </div>
    );
  }
}
