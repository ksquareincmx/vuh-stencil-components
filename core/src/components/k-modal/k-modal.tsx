import { Component, h, Prop, State } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-modal',
  styleUrl: 'k-modal.scss',
  shadow: true
})
export class Modal {
  @Prop({ mutable: true }) show: boolean = false;
  @Prop() hideCloseButton: boolean = false;
  @State() body?: HTMLElement;

  componentWillRender() {
    this.body = document.querySelector('body');

    if (this.show) {
      this.body.style.overflow = 'hidden';
    }
  }

  handleCloseModal() {
    this.show = false;
    this.body.style.overflow = 'auto';
  }

  render() {
    return (
      <div
        class={clsx('KModal', {
          '--is-shown': this.show
        })}
      >
        <div class="KModal-content">
          {!this.hideCloseButton && (
            <div class="KModal-close">
              <i
                class="KModal-btn vuh-close"
                onClick={this.handleCloseModal.bind(this)}
              ></i>
            </div>
          )}
          <div class="KModal-body">
            <slot></slot>
          </div>
        </div>
        <div
          class="KModal-background"
          onClick={this.handleCloseModal.bind(this)}
        ></div>
      </div>
    );
  }
}
