import {
  Component,
  Element,
  State,
  Prop,
  Host,
  h,
  Listen
} from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-select',
  styleUrl: 'k-select.scss',
  shadow: true
})
export class KSelect {
  private selectEl?: HTMLSelectElement;
  private optionsEl?: HTMLDivElement;
  @Element() el!: HTMLElement;

  @State() children?: any;
  @State() value: any | null;
  @State() label: string = 'Default';

  @Prop() color?: 'primary' | 'secondary' | 'terciary' = 'primary';
  @Prop({ reflect: true }) disabled?: boolean = false;

  componentWillRender() {
    this.children = this.el.children;
  }

  renderOptions() {
    const elements = Array.from(this.children).map((child) => (
      <option value={child['value']}>{child['innerHTML']}</option>
    ));
    return elements;
  }

  @Listen('valueChanged')
  valueChangedHandler(state) {
    const { value, id, label } = state.detail;
    if (value) {
      const currentValue = this.value;
      const newValue = state.detail.value;
      this.toggleShowOptions();
      if (newValue !== currentValue) {
        this.value = newValue;
        this.label = label;
      }
      for (let i = 0; i < this.children.length; i++) {
        if (this.children[i].attributes['id'].value !== id) {
          this.children[i].removeAttribute('selected');
        }
      }
      for (let l = 0; l < this.selectEl.children.length; l++) {
        if (
          this.selectEl.children[l].attributes['value'].value === this.value
        ) {
          this.selectEl.children[l].setAttribute('selected', 'selected');
        } else {
          this.selectEl.children[l].removeAttribute('selected');
        }
      }
    }
  }

  private toggleShowOptions = () => {
    if (this.optionsEl.style.display === 'block') {
      this.optionsEl.style.display = 'none';
    } else {
      this.optionsEl.style.display = 'block';
    }
  };

  render() {
    return (
      <Host class="KSelect">
        <select
          class="KSelect-select"
          ref={(el) => (this.selectEl = el as HTMLSelectElement)}
        >
          {this.renderOptions()}
        </select>
        <button
          class={clsx(`KSelect-selected ${this.color}`)}
          disabled={this.disabled}
          value={this.value}
          onClick={this.toggleShowOptions}
        >
          {this.label}
          <span class="KSelect-icon vuh-keyboard_arrow_down" />
        </button>
        <div
          class="KSelect-options"
          ref={(el) => (this.optionsEl = el as HTMLDivElement)}
        >
          <div class="KSelect-options-wrapper">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
