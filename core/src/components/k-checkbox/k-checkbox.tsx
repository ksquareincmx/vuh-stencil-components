import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'k-checkbox',
  styleUrl: 'k-checkbox.scss',
  shadow: true
})
export class KCheckbox {
  private inputEl: HTMLElement;

  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop({ mutable: true }) checked?: boolean = false;

  private onCheckboxClick = (e: any) => {
    e.stopPropagation();
    if (!this.disabled) {
      this.inputEl.click();
      this.checked = !this.checked;
    }
  };

  render() {
    return (
      <label
        class={`KCheckbox ${this.disabled ? 'KCheckbox--disabled' : ''}`}
        onClick={this.onCheckboxClick}
      >
        <input
          ref={(el: HTMLElement) => (this.inputEl = el)}
          type="checkbox"
          class="KCheckbox-input"
          disabled={this.disabled}
          checked={this.checked}
        />
        <span class="KCheckbox-checkmark">
          <span class="KCheckbox-icon vuh-done"></span>
        </span>
        <span class="KCheckbox-label">
          <slot>Default</slot>
        </span>
      </label>
    );
  }
}
