import { Component, h, Host, Listen, Element, State } from '@stencil/core';

@Component({
  tag: 'k-radio-button-group',
  styleUrl: 'k-radio-button-group.scss',
  shadow: true
})
export class RadioButtonGroup {
  private slotted: HTMLCollection;

  @Element() el!: HTMLElement;

  @State() value: any | null;

  componentDidLoad() {
    this.slotted = this.el.children;
    // will take the value of the last one checked, by recomendation should only have one checked
    for (let i = 0; i < this.slotted.length; i++) {
      if (this.slotted[i].attributes['checked']) {
        this.value = this.slotted[i].attributes['value'].value;
      }
    }
  }

  @Listen('valueChanged')
  valueChangedHandler(state) {
    const { value, id } = state.detail;
    if (value) {
      const currentValue = this.value;
      const newValue = state.detail.value;
      if (newValue !== currentValue) {
        this.value = newValue;
      }
      for (let i = 0; i < this.slotted.length; i++) {
        if (this.slotted[i].attributes['id'].value !== id) {
          this.slotted[i].removeAttribute('checked');
        }
      }
    }
  }

  private onClick = (e: Event) => {
    this.value = e.target && (e.target as HTMLInputElement).value;
  };

  render() {
    return (
      <Host class="KRadioButtonGroup" onClick={this.onClick}>
        <slot></slot>
      </Host>
    );
  }
}
