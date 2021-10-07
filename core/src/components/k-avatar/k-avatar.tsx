import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'k-avatar',
  styleUrl: 'k-avatar.scss',
  shadow: true
})
export class Avatar {
  @Prop() size?: 'small' | 'medium' | 'large' = 'small';

  render() {
    return (
      <div class={`KAvatar ${this.size}`}>
        <slot></slot>
      </div>
    );
  }
}
