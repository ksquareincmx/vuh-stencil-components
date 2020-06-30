import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'k-input',
  styleUrl: 'k-input.scss',
  shadow: true
})
export class KInput {
  @Prop() type: string = 'text';
  @Prop() label: string = 'Default';
  @Prop() value: string = '';
  @Prop() disabled: boolean = false;
  @Prop() validationState: '' | 'success' | 'error' = '';

  render() {
    return (
      <div class="KInput">
        <input
          id="k-input"
          placeholder=" "
          value={this.value}
          disabled={this.disabled}
          type={this.type}
        />
        <label htmlFor="k-input">{this.label}</label>
      </div>
    );
  }
}
