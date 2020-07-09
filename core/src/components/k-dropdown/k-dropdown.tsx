import {
  Component,
  h,
  Host,
  Listen,
  Element,
  State,
  Prop
} from '@stencil/core';

@Component({
  tag: 'k-dropdown',
  styleUrl: 'k-dropdown.scss',
  shadow: true
})
export class KDropdown {
  private slotted: HTMLCollection;

  @Element() el!: HTMLElement;

  @State() optionsEl?: HTMLElement;
  @State() value: any | null;
  @State() label: string = 'Default';
  @State() currentChecked: string = '';

  @Prop() color: 'primary' | 'secondary' | 'terciary' = 'primary';
  @Prop() disabled: boolean = false;

  componentWillLoad() {
    this.slotted = this.el.children;
    // set checked option by default
    const slottedArray = Array.from(this.slotted);

    slottedArray.forEach((slotEl, index) =>
      slotEl.setAttribute('k-dropdown-id', String(index))
    );

    let i = 0;
    for (i; i < slottedArray.length; i++) {
      if (this.slotted[i].attributes['checked']) {
        this.value = this.slotted[i].attributes['value'].value;
        this.label = this.slotted[i].innerHTML;
        this.currentChecked = String(i);
        break;
      } else {
        this.slotted[0].setAttribute('checked', 'true');
        this.value = this.slotted[0].attributes['value'].value;
        this.label = this.slotted[0].innerHTML;
        this.currentChecked = '0';
      }
    }
  }

  @Listen('valueChanged')
  valueChangedHandler(state) {
    const { value, label, id } = state.detail;
    if (value) {
      const currentValue = this.value;
      const newValue = value;

      this.toggleShowOptions();

      if (newValue !== currentValue) {
        this.value = newValue;
        this.label = label;
      }
    }
    this.slotted[this.currentChecked].removeAttribute('checked');
    this.currentChecked = id;
  }

  toggleShowOptions() {
    if (this.optionsEl.style.display === 'block') {
      this.optionsEl.style.display = 'none';
    } else {
      this.optionsEl.style.display = 'block';
    }
  }

  render() {
    return (
      <Host class="KDropdown">
        <button
          class={`KDropdown-button ${this.color}`}
          disabled={this.disabled}
          onClick={this.toggleShowOptions.bind(this)}
        >
          {this.label}
          <span class="KDropdown-icon vuh-keyboard_arrow_down" />
        </button>
        <div
          ref={(el: HTMLElement) => (this.optionsEl = el)}
          class="KDropdown-options"
        >
          <slot></slot>
        </div>
      </Host>
    );
  }
}
