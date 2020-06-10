import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'k-switch',
  styleUrl: 'k-switch.scss',
  shadow: true
})
export class KSwitch {
  @Prop() label?: string = '';
  @Prop() disabled?: boolean = false;
  @Prop() checked?: boolean = false;

  render() {
    return (
      <Host class="KSwitch">
        <input
          id="k-checkbox"
          type="checkbox"
          class="KSwitch-state"
          checked={this.checked}
          disabled={this.disabled}
        />
        <label htmlFor="k-checkbox" class="KSwitch-action"></label>
        {this.label !== '' && <label class="KSwitch-text">{this.label}</label>}
      </Host>
    );
  }
}
