import {
  Component,
  h,
  Prop,
  Event,
  EventEmitter,
  Watch,
  State
} from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-input',
  styleUrl: 'k-input.scss',
  shadow: true
})
export class Input {
  @Prop() type: 'text' | 'password' | 'email' | 'tel' | 'url' | 'number' =
    'text';
  @Prop() label: string = 'Default';
  @Prop({ mutable: true }) value?: string = '';
  @Prop() disabled?: boolean = false;
  @Prop() validationState?: '' | 'success' | 'error' = '';
  @Prop() name?: string = '';
  @Prop() helperText?: string = '';
  @Prop() maxLength?: number = 0;
  @Prop() minLength?: number = 0;

  @State() inputEl: HTMLElement;
  @Event() valueChange: EventEmitter;

  private isSuccess = () => {
    return this.validationState === 'success';
  };

  private isError = () => {
    return this.validationState === 'error';
  };

  @Watch('value')
  valueChanged(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      this.inputEl['value'] = newValue;
    }
  }

  inputChanged(ev: any) {
    const chars = ev?.target?.value;
    this.value = chars;
    this.valueChange.emit(this.value);
  }

  render() {
    return (
      <div class="KInput">
        <input
          ref={(el: HTMLElement) => (this.inputEl = el)}
          class={clsx({
            '--is-valid': this.isSuccess(),
            '--is-invalid': this.isError()
          })}
          id="k-input"
          placeholder=" "
          disabled={this.disabled}
          type={this.type}
          name={this.name}
          maxLength={this.maxLength > 0 ? this.maxLength : null}
          minLength={this.minLength > 0 ? this.minLength : null}
          value={this.value}
          onInput={this.inputChanged.bind(this)}
        />
        <label
          htmlFor="k-input"
          class={clsx({
            '--is-valid': this.isSuccess(),
            '--is-invalid': this.isError()
          })}
        >
          {this.label}
        </label>
        {this.helperText && (
          <span
            class={clsx('KInput-helper-text', {
              '--is-valid': this.isSuccess(),
              '--is-invalid': this.isError()
            })}
          >
            {this.helperText}
          </span>
        )}
        <div
          class={clsx('KInput-icon', {
            '--is-valid': this.isSuccess(),
            '--is-invalid': this.isError()
          })}
        >
          {this.isSuccess() && (
            <k-icon size="medium" name="check-circle"></k-icon>
          )}

          {this.isError() && (
            <k-icon size="medium" name="alert-circle"></k-icon>
          )}
        </div>
      </div>
    );
  }
}
