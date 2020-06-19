import {
  Component,
  h,
  Prop,
  Watch,
  Event,
  EventEmitter,
  State,
  Host
} from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-tab-item',
  styleUrl: 'k-tab-item.scss',
  shadow: true
})
export class KTabItem {
  @Prop() current: boolean = false;
  @Prop() disabled: boolean = false;
  @Event() valueChanged: EventEmitter<{ value: boolean; id: String }>;

  @State() el?: HTMLElement;

  @Watch('current')
  currentChanged() {
    this.valueChanged.emit({
      value: this.current,
      id: this.el.attributes['tabid'].value
    });
  }

  render() {
    return (
      <Host ref={(el) => (this.el = el)}>
        <button
          class={clsx('KTabItem', {
            'is-active': this.current
          })}
          disabled={this.disabled}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
