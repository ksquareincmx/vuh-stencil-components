import { Component, h, Host, Prop, Element } from '@stencil/core';

@Component({
  tag: 'k-switch',
  styleUrl: 'k-switch.scss',
  shadow: true
})
export class Switch {
  private checkEl: HTMLElement;

  @Element() el: HTMLElement;

  @Prop() label?: string = '';
  @Prop() disabled?: boolean = false;
  @Prop({ reflect: true, mutable: true }) checked?: boolean = false;

  handleCheckChange(ev: any) {
    const checked = ev.target.checked;
    this.checkEl['checked'] = checked;
    this.checked = checked;
    this.el.click();
  }

  render() {
    return (
      <Host class="KSwitch">
        <input
          ref={(el) => (this.checkEl = el)}
          id="k-checkbox"
          type="checkbox"
          class="KSwitch-state"
          checked={this.checked}
          disabled={this.disabled}
          onInput={this.handleCheckChange.bind(this)}
        />
        <label htmlFor="k-checkbox" class="KSwitch-action"></label>
        {this.label !== '' && <label class="KSwitch-text">{this.label}</label>}
      </Host>
    );
  }
}
