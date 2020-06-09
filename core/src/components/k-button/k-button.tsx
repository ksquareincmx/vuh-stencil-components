import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'k-button',
  styleUrl: 'k-button.scss',
  shadow: true
})
export class KButton {
  @Prop() color?: string = 'primary';
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop() shape?: 'full' | 'round' | 'smooth' = 'smooth';

  render() {
    return (
      <button class={`${this.color} ${this.shape}`} disabled={this.disabled}>
        <slot>Default</slot>
      </button>
    );
  }
}
