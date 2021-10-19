import {
  Component,
  h,
  Host,
  Prop,
  Event,
  EventEmitter,
  Element
} from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-checkbox',
  styleUrl: 'k-checkbox.scss',
  shadow: true
})
export class Checkbox {
  @Prop({ reflect: true }) disabled?: boolean = false;
  @Prop({ reflect: true, mutable: true }) checked?: boolean = false;
  @Prop({ mutable: true }) value?: string;

  @Element() el: HTMLElement;

  @Event() valueChange: EventEmitter;

  handleChange(ev) {
    const target = ev?.target;
    this.checked = target?.checked;
    this.value = target?.value;
    this.valueChange.emit(this.value);
    this.el.click();
  }

  private handlePropagation = (e: Event) => {
    e.stopPropagation();
  };

  render() {
    return (
      <Host>
        <label
          class={clsx('KCheckbox', { 'KCheckbox--disabled': this.disabled })}
          onClick={this.handlePropagation}
        >
          <input
            type="checkbox"
            class="KCheckbox-input"
            value={this.value}
            disabled={this.disabled}
            checked={this.checked}
            onInput={this.handleChange.bind(this)}
            onClick={this.handlePropagation}
          />
          <span class="KCheckbox-checkmark">
            <span class="KCheckbox-icon vuh-done"></span>
          </span>
          <span class="KCheckbox-label">
            <slot></slot>
          </span>
        </label>
      </Host>
    );
  }
}
