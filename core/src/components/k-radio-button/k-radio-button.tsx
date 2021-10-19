import {
  Component,
  h,
  Prop,
  Event,
  EventEmitter,
  Watch,
  Host,
  Element
} from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-radio-button',
  styleUrl: 'k-radio-button.scss',
  shadow: true
})
export class RadioButton {
  private buttonEl: HTMLElement;
  private inputId = `rb-${radioButtonIds++}`; // we need an identifier for each radio button

  @Element() el: HTMLElement;

  @Prop() name: string = this.inputId;
  @Prop({ mutable: true, reflect: true }) value: string = this.inputId;
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop({ mutable: true, reflect: true }) checked: boolean = false;

  @Event() valueChanged: EventEmitter<{ value: any; id: String }>;

  @Watch('checked')
  checkedChange() {
    this.valueChanged.emit({ value: this.value, id: this.inputId });
  }

  componentDidLoad() {
    this.el.id = this.inputId;
  }

  private checkedClicked = (e: Event) => {
    e.stopPropagation();
    if (!this.disabled) {
      this.checked = true;
      this.buttonEl.click(); // Force click on hidden input to update its checked state
      this.el.click(); // will propagate only the click for the complete element
    }
  };

  private inputClicked = (e: Event) => {
    e.stopPropagation();
  };

  render() {
    return (
      <Host>
        <label
          htmlFor={`${this.inputId}-input`}
          class={clsx('KRadioButton', {
            'KRadioButton-disabled': this.disabled
          })}
          onClick={this.checkedClicked}
        >
          <input
            ref={(el: HTMLElement) => (this.buttonEl = el)}
            id={`${this.inputId}-input`}
            class="KRadioButton-input"
            type="radio"
            value={this.value}
            checked={this.checked}
            disabled={this.disabled}
            onClick={this.inputClicked}
          ></input>
          <span class="KRadioButton-checkmark">
            <span class="KRadioButton-dot"></span>
          </span>
          <span class="KRadioButton-label">
            <slot>Default</slot>
          </span>
        </label>
      </Host>
    );
  }
}

let radioButtonIds = 0;
