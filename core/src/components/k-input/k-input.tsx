import { Component, h, Prop } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-input',
  styleUrl: 'k-input.scss',
  shadow: true
})
export class KInput {
  @Prop() type: string = 'text';
  @Prop() label: string = 'Default';
  @Prop() value?: string = '';
  @Prop() disabled?: boolean = false;
  @Prop() validationState?: '' | 'success' | 'error' = '';
  @Prop() name?: string = '';
  @Prop() helperText?: string = '';

  private isSuccess = () => {
    return this.validationState === 'success';
  };

  private isError = () => {
    return this.validationState === 'error';
  };

  render() {
    return (
      <div class="KInput">
        <input
          class={clsx({
            '--is-valid': this.isSuccess(),
            '--is-invalid': this.isError()
          })}
          id="k-input"
          placeholder=" "
          value={this.value}
          disabled={this.disabled}
          type={this.type}
          name={this.name}
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
            <k-icon size="medium" name="check_circle"></k-icon>
          )}

          {this.isError() && (
            <k-icon size="medium" name="alert_circle"></k-icon>
          )}
        </div>
      </div>
    );
  }
}
