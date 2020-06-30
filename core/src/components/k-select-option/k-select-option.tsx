import {
  Component,
  h,
  Event,
  Element,
  Host,
  EventEmitter,
  Prop
} from '@stencil/core';

@Component({
  tag: 'k-select-option',
  styleUrl: 'k-select-option.scss',
  shadow: true
})
export class KSelectOption {
  @Element() el: HTMLOptionElement;

  @Prop() value: string = '';
  @Prop() selected: boolean = false;

  private optionId = `so-${selectOptionIds++}`;

  @Event() valueChanged: EventEmitter<{ value: any; id: String; label: any }>;

  private optionClicked = (e: Event) => {
    e.stopPropagation();
    this.valueChanged.emit({
      value: this.value,
      id: this.optionId,
      label: this.el.innerHTML
    });
  };

  componentDidLoad() {
    this.el.id = this.optionId;
  }

  render() {
    return (
      <Host
        class="KSelectOption"
        onClick={this.optionClicked}
        value={this.value}
        selected={this.selected}
      >
        <slot></slot>
      </Host>
    );
  }
}

let selectOptionIds = 0;
