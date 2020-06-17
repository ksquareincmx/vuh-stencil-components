import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'k-radio-button',
  styleUrl: 'k-radio-button.scss',
  shadow: true
})
export class KRadioButton {
  private buttonEl: HTMLElement;

  @Prop() name: string;
  @Prop() value: string;
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop({ mutable: true }) checked?: boolean = false;

  private checkedClicked = (e: any) => {
    e.stopPropagation();
    if (!this.disabled) {
      this.buttonEl.click(); // Force click on hidden input to update its value
      this.checked = !this.checked;
    }
  };

  render() {
    return (
      <label
        htmlFor="KRadioButton-input"
        class={`KRadioButton ${this.disabled ? 'disabled' : ''}`}
        onClick={this.checkedClicked}
      >
        <input
          ref={(el: HTMLElement) => (this.buttonEl = el)}
          id="KRadioButton-input"
          class="KRadioButton-input"
          type="radio"
          value={this.value}
          checked={this.checked}
          disabled={this.disabled}
        ></input>
        <span class="KRadioButton-checkmark">
          <span class="KRadioButton-dot"></span>
        </span>
        <span class="KRadioButton-label">
          <slot>Default</slot>
        </span>
      </label>
    );
  }
}
