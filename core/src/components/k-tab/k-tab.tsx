import { Component, h, Host, State, Element, Listen } from '@stencil/core';

@Component({
  tag: 'k-tab',
  styleUrl: 'k-tab.scss',
  shadow: true
})
export class Tab {
  @Element() host: HTMLElement;
  @State() childrenData = {
    selectedChild: -1,
    numberOfChildren: 0
  };

  @Listen('valueChanged')
  valueChangedHandler(state) {
    const { id, value } = state.detail;
    if (value) {
      this.childrenData = {
        ...this.childrenData,
        selectedChild: id
      };
    }
  }

  componentWillLoad() {
    const slotted = this.host.children;
    Array.from(slotted).forEach((slot, index) => {
      slot.setAttribute('tabId', String(index));
    });

    const currentTab = Array.from(slotted).findIndex((slot) => {
      return (
        slot.attributes['current'] &&
        slot.attributes['current'].value === 'true'
      );
    });
    this.childrenData = {
      selectedChild: currentTab,
      numberOfChildren: slotted.length
    };
  }

  render() {
    return (
      <Host class="KTab">
        <slot></slot>
        <div
          class="KTab--selected"
          style={{
            width: `${100 / this.childrenData.numberOfChildren}%`,
            transform: `translateX(${this.childrenData.selectedChild * 100}%)`
          }}
        ></div>
      </Host>
    );
  }
}
