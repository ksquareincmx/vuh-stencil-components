import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'k-elevation',
  styleUrl: 'k-elevation.scss',
  shadow: true
})
export class Elevation {
  @Prop() radius?: string;

  render() {
    return (
      <div class="KElevation" style={{ borderRadius: this.radius }}>
        <slot></slot>
      </div>
    );
  }
}
