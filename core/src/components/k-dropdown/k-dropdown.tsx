import {
  Component,
  h,
  Host,
  Listen,
  Element,
  State,
  Prop
} from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-dropdown',
  styleUrl: 'k-dropdown.scss',
  shadow: true
})
export class Dropdown {
  private slotted: HTMLCollection;

  @Element() el!: HTMLElement;

  @State() optionsEl?: HTMLElement;
  @State() value: any | null = null;
  @State() text: string = 'Default';
  @State() currentChecked: string = '';
  @State() active: boolean = false;

  @Prop() disabled: boolean = false;
  @Prop() variant?: 'button' | 'input' | 'table' = 'button';
  // prop button
  @Prop() color: 'primary' | 'secondary' | 'terciary' = 'primary';
  // prop input
  @Prop() validationState?: '' | 'success' | 'error' = '';
  @Prop() label: string;
  @Prop() helperText?: string = '';

  componentWillRender() {
    let nothingIsChecked = true;
    this.slotted = this.el.children;
    // set checked option by default
    const slottedArray = Array.from(this.slotted);

    slottedArray.forEach((slotEl, index) => {
      slotEl.setAttribute('k-dropdown-id', String(index));
    });

    let i = 0;
    for (i; i < slottedArray.length; i++) {
      if (this.slotted[i].attributes['checked']) {
        nothingIsChecked = false;
        this.value = this.slotted[i].attributes['value'].value;
        this.text = this.slotted[i].innerHTML;
        this.currentChecked = String(i);
        break;
      }
    }

    if (nothingIsChecked) {
      this.slotted[0].setAttribute('checked', 'true');
      this.value = this.slotted[0].attributes['value'].value;
      this.text = this.slotted[0].innerHTML;
      this.currentChecked = '0';
    }
  }

  @Listen('valueChanged')
  valueChangedHandler(state) {
    const { value, text, id } = state.detail;
    if (value) {
      const currentValue = this.value;
      const newValue = value;

      this.toggleShowOptions();

      if (newValue !== currentValue) {
        this.value = newValue;
        this.text = text;
      }
    }
    this.slotted[this.currentChecked].removeAttribute('checked');
    this.currentChecked = id;
  }

  toggleShowOptions() {
    if (this.optionsEl.style.display === 'block') {
      this.optionsEl.style.display = 'none';
      this.active = false;
    } else if (!this.disabled) {
      this.optionsEl.style.display = 'block';
      this.active = true;
    }
  }

  private isVariantButton = () => {
    return this.variant === 'button';
  };

  private isVariantInput = () => {
    return this.variant === 'input';
  };

  private isVariantTable = () => {
    return this.variant === 'table';
  };

  private isSuccess = () => {
    return this.validationState === 'success';
  };

  private isError = () => {
    return this.validationState === 'error';
  };

  render() {
    return (
      <Host>
        <div class="KDropdown">
          {this.label && (this.isVariantInput() || this.isVariantTable()) && (
            <label
              class={clsx('KDropdown-label', {
                '--is-disabled': this.disabled,
                '--is-valid': this.isVariantInput() && this.isSuccess(),
                '--is-invalid': this.isVariantInput() && this.isError(),
                '--is-active': this.active,
                '--is-input': this.isVariantInput(),
                '--is-table': this.isVariantTable()
              })}
              onClick={this.toggleShowOptions.bind(this)}
            >
              {this.label}
            </label>
          )}
          <button
            class={clsx(
              'KDropdown-dispatcher',
              {
                'KDropdown-input': this.isVariantInput(),
                'KDropdown-button': this.isVariantButton(),
                'KDropdown-table': this.isVariantTable(),
                '--is-valid': this.isVariantInput() && this.isSuccess(),
                '--is-invalid': this.isVariantInput() && this.isError(),
                '--is-active': this.active
              },
              [this.isVariantButton() && this.color]
            )}
            disabled={this.disabled}
            onClick={this.toggleShowOptions.bind(this)}
          >
            <span>{this.text}</span>
            <i class="KDropdown-icon vuh-keyboard-arrow-down"></i>
          </button>
          {this.helperText && this.isVariantInput() && (
            <span
              class={clsx('KDropdown-input-helper-text', {
                '--is-valid': this.isSuccess(),
                '--is-invalid': this.isError()
              })}
            >
              {this.helperText}
            </span>
          )}
          <div
            ref={(el: HTMLElement) => (this.optionsEl = el)}
            class="KDropdown-options"
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
