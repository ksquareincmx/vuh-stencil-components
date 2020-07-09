import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-checkbox',
  styleUrl: 'k-checkbox.scss',
  shadow: true
})
export class KCheckbox {
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop({ mutable: true }) checked?: boolean = false;
  @Prop({ mutable: true }) value?: string;

  @Event() valueChange: EventEmitter;

  handleChange(ev) {
    const target = ev?.target;
    this.checked = target?.checked;
    this.value = target?.value;
    this.valueChange.emit(this.value);
  }

  render() {
    return (
      <label
        class={clsx('KCheckbox', { 'KCheckbox--disabled': this.disabled })}
      >
        <input
          type="checkbox"
          class="KCheckbox-input"
          value={this.value}
          disabled={this.disabled}
          checked={this.checked}
          onInput={this.handleChange.bind(this)}
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
