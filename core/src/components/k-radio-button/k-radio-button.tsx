import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'k-radio-button',
  styleUrl: 'k-radio-button.scss',
  shadow: true
})
export class KRadioButton {
  private buttonEl?: HTMLElement;

  @Prop() name: string;
  @Prop() value: string;
  @Prop() label?: string;
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
        htmlFor="k-radio"
        class="KRadioButton"
        onClick={this.checkedClicked}
      >
        <input
          ref={(el: HTMLElement) => (this.buttonEl = el)}
          id="k-radio"
          class="k-radio-input"
          type="radio"
          value={this.value}
          checked={this.checked}
          disabled={this.disabled}
        ></input>
        <span class="checkmark">
          <span class="dot"></span>
        </span>
        <span class="k-radio-label">{this.label}</span>
      </label>
    );
  }
}
