import { Component, h } from '@stencil/core';

@Component({
  tag: 'k-input',
  styleUrl: 'k-input.scss',
  shadow: true
})
export class KInput {
  render() {
    return (
      <label class="KInput">
        <input placeholder=" " />
        <span>Name</span>
      </label>
    );
  }
}
