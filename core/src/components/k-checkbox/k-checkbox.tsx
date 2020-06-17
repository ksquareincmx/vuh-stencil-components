import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'k-checkbox',
  styleUrl: 'k-checkbox.scss',
  shadow: true
})
export class KCheckbox {
  private inputEl?: HTMLElement;

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
        class={`container ${this.disabled ? 'disabled' : ''}`}
        onClick={this.onCheckboxClick}
      >
        <input
          ref={(el: HTMLElement) => (this.inputEl = el)}
          type="checkbox"
          class="checkbox-input"
          disabled={this.disabled}
          checked={this.checked}
        />
        <span class="checkmark">
          <span class="icon vuh-done"></span>
        </span>
        <span class="text">
          <slot>Default</slot>
        </span>
      </label>
    );
  }
}
