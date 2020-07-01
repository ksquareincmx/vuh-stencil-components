import { Component, h, Prop, State } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-text-field',
  styleUrl: 'k-text-field.scss',
  shadow: true
})
export class KTextField {
  @Prop() label: string = 'Default';
  @Prop() value?: string = '';
  @Prop() disabled?: boolean = false;
  @Prop() validationState?: '' | 'success' | 'error' = '';
  @Prop() name?: string = '';
  @Prop() helperText?: string = '';
  @Prop() maxLength?: number = 0;

  @State() typingCount: number = 0;

  private isSuccess = () => {
    return this.validationState === 'success';
  };

  private isError = () => {
    return this.validationState === 'error';
  };

  handleChange(e) {
    const chars = e.target.value;
    this.typingCount = chars.length;
  }

  render() {
    return (
      <div class="KTextField">
        <textarea
          onInput={(event) => this.handleChange(event)}
          class={clsx({
            '--is-valid': this.isSuccess(),
            '--is-invalid': this.isError()
          })}
          placeholder=" "
          id="k-text-field"
          value={this.value}
          name={this.name}
          disabled={this.disabled}
          maxLength={this.maxLength > 0 ? this.maxLength : null}
        ></textarea>
        <label
          htmlFor="k-text-field"
          class={clsx({
            '--is-valid': this.isSuccess(),
            '--is-invalid': this.isError()
          })}
        >
          {this.label}
        </label>
        <div
          class={clsx('KTextField-footer', {
            '--is-valid': this.isSuccess(),
            '--is-invalid': this.isError()
          })}
        >
          {this.helperText && (
            <span class="KInput-helper-text">{this.helperText}</span>
          )}
          {this.maxLength > 0 && (
            <span class="KInput-typing-count">
              {this.typingCount} / {this.maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
}
