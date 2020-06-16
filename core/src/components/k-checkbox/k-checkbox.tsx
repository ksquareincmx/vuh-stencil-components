import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'k-checkbox',
  styleUrl: 'k-checkbox.scss',
  shadow: true
})
export class KCheckbox {
  @Prop({ reflect: true }) disabled?: boolean = false;

  render() {
    return (
      <label class="container">
        <input type="checkbox" disabled={this.disabled} />
        <span class="checkmark"></span>
        <slot>Default</slot>
      </label>
    );
  }
}
