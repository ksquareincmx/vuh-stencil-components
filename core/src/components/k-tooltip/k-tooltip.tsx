import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'k-tooltip',
  styleUrl: 'k-tooltip.scss',
  shadow: true
})
export class Tooltip {
  @Prop() text: string = '';
  @Prop() position: 'top' | 'left' | 'right' | 'bottom' = 'bottom';

  render() {
    return (
      <div class="KTooltip">
        <slot></slot>
        <span class={`KTooltip-text ${this.position}`}>{this.text}</span>
      </div>
    );
  }
}
