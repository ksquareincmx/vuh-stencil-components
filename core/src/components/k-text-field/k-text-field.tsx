import {
  Component,
  h,
  Prop,
  State,
  Event,
  EventEmitter,
  Watch
} from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-text-field',
  styleUrl: 'k-text-field.scss',
  shadow: true
})
export class TextField {
  private textAreaEl: HTMLElement;

  @Prop() label: string = 'Default';
  @Prop({ mutable: true }) value?: string = '';
  @Prop() disabled?: boolean = false;
  @Prop() validationState?: '' | 'success' | 'error' = '';
  @Prop() name?: string = '';
  @Prop() helperText?: string = '';
  @Prop() maxLength?: number = 0;
  @Prop() minLength?: number = 0;

  @State() typingCount: number = 0;
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
      this.textAreaEl['value'] = newValue;
    }
  }

  handleChange(ev) {
    const chars = ev?.target?.value;
    this.typingCount = chars.length;

    this.value = chars;
    this.valueChange.emit(this.value);
  }

  render() {
    return (
      <div class="KTextField">
        <textarea
          ref={(el: HTMLElement) => (this.textAreaEl = el)}
          class={clsx({
            '--is-valid': this.isSuccess(),
            '--is-invalid': this.isError()
          })}
          placeholder=" "
          id="k-text-field"
          name={this.name}
          disabled={this.disabled}
          maxLength={this.maxLength > 0 ? this.maxLength : null}
          minLength={this.minLength > 0 ? this.minLength : null}
          value={this.value}
          onInput={(event) => this.handleChange(event)}
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
