import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'k-progress-bar',
  styleUrl: 'k-progress-bar.scss',
  shadow: true
})
export class ProgressBar {
  @Prop() value: number = 0;

  render() {
    return (
      <Host>
        <label htmlFor="k-progress-bar" class="KProgressBar-label">
          Progress {'•'} {this.value}%
        </label>
        <progress
          class="KProgressBar-load"
          id="k-progress-bar"
          value={this.value}
          max="100"
        ></progress>
      </Host>
    );
  }
}
