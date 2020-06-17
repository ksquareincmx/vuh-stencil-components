import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'k-button',
  styleUrl: 'k-button.scss',
  shadow: true
})
export class KButton {
  @Prop() color?: string = 'primary';
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop({ reflect: true }) elevation?: boolean = false;
  @Prop() shape?: 'full' | 'round' | 'smooth' = 'smooth';
  @Prop() size?: 'large' | 'medium' | 'small' = 'medium';

  render() {
    return (
      <button
        class={`KButton ${this.color} ${this.shape} ${this.size} ${
          this.elevation ? 'elevation' : ''
        }`}
        disabled={this.disabled}
      >
        <slot>Default</slot>
      </button>
    );
  }
}
