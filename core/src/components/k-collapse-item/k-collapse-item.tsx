import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'k-collapse-item',
  styleUrl: 'k-collapse-item.scss',
  shadow: true
})
export class CollapseItem {
  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host class="KCollapseItem">
        <button class="KCollapseItem-button" disabled={this.disabled}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
