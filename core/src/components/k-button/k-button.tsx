import { Component, h, Prop, Host } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-button',
  styleUrl: 'k-button.scss',
  shadow: true
})
export class Button {
  @Prop() color?: 'primary' | 'secondary' | 'terciary' = 'primary';
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop({ reflect: true }) elevation?: boolean = false;
  @Prop() shape?: 'full' | 'round' | 'smooth' = 'smooth';
  @Prop() size?: 'large' | 'medium' | 'small' = 'medium';

  render() {
    return (
      <Host>
        <button
          class={clsx(`KButton ${this.color} ${this.shape} ${this.size}`, {
            elevation: this.elevation
          })}
          disabled={this.disabled}
        >
          <slot>Default</slot>
        </button>
      </Host>
    );
  }
}
