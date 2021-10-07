import {
  Component,
  h,
  Prop,
  Event,
  EventEmitter,
  Element,
  State
} from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-dropdown-item',
  styleUrl: 'k-dropdown-item.scss',
  shadow: true
})
export class DropdownItem {
  @Element() el: HTMLElement;
  @State() inputEl: HTMLElement;

  @Prop() name: string = '';
  @Prop({ reflect: true }) value: string = '';
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop({ reflect: true, mutable: true }) checked: boolean = false;

  @Event() valueChanged: EventEmitter<{
    id: any;
    value: any;
    text: string;
  }>;
  @Event() selectChanged: EventEmitter;

  onSelected(e) {
    e.stopPropagation();
    if (!this.disabled) {
      this.el.click();
      this.inputEl.click();
      this.checked = true;
    }
  }

  handleChangeSelected(e) {
    this.valueChanged.emit({
      id: this.el.attributes['k-dropdown-id'].value,
      value: this.value,
      text: this.el.innerHTML
    });
    this.selectChanged.emit(e?.target?.value);
  }

  render() {
    return (
      <label
        class={clsx('KDropdownItem', {
          'KDropdownItem-disabled': this.disabled
        })}
        onClick={this.onSelected.bind(this)}
      >
        <input
          ref={(el: HTMLElement) => (this.inputEl = el)}
          name={this.name}
          class="KDropdownItem-input"
          type="radio"
          value={this.value}
          checked={this.checked}
          disabled={this.disabled}
          onInput={this.handleChangeSelected.bind(this)}
        />
        <span class="KDropdownItem-text">
          <slot>Default</slot>
        </span>
      </label>
    );
  }
}
