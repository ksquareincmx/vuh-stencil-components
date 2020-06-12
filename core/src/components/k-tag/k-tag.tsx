import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'k-tag',
  styleUrl: 'k-tag.scss',
  shadow: true
})
export class KTag {
  @Prop() icon: string = '';

  render() {
    return (
      <Host class="KTag">
        <slot />
        <i class={`KTag-icon ${this.icon}`}></i>
      </Host>
    );
  }
}
