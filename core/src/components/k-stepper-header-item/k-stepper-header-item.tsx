import {
  Component,
  Host,
  h,
  Element,
  State,
  Event,
  EventEmitter,
  Listen,
  Prop
} from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-stepper-header-item',
  styleUrl: 'k-stepper-header-item.scss',
  shadow: true
})
export class StepperHeaderItem {
  private STATUS_STEP = {
    NONE: Symbol('none'),
    START: Symbol('start'),
    END: Symbol('end')
  };

  @Element() el: HTMLElement;
  @Event() stepClicked: EventEmitter<{ stepNumber: number; translate: number }>;
  @State() status: symbol = this.STATUS_STEP.NONE;
  @State() stepNumber: number;

  @Prop() done: boolean = false;
  @Prop() started: boolean = false;

  // handle event in other instances of this one
  @Listen('stepClicked')
  handleClickStep(ev) {
    const { stepNumber } = ev?.detail;

    if (this.stepNumber === stepNumber) {
      this.status = this.STATUS_STEP.START;
    }
  }

  componentWillRender() {
    this.stepNumber = +this.el.getAttribute('step');

    if (this.stepNumber === 1) {
      this.status = this.STATUS_STEP.START;
    }

    if (this.done) {
      this.status = this.STATUS_STEP.END;
    } else if (this.started) {
      this.status = this.STATUS_STEP.START;

      this.emitStepChange();
    }
  }

  private isStated = () => {
    return this.status === this.STATUS_STEP.START;
  };

  private isEnded = () => {
    return this.status === this.STATUS_STEP.END;
  };

  private isNone = () => {
    return this.status === this.STATUS_STEP.NONE;
  };

  handleChangeStep(ev) {
    ev.preventDefault();
    this.emitStepChange();
  }

  emitStepChange() {
    const index = this.stepNumber - 1;
    const translate = index * 100;
    this.stepClicked.emit({ stepNumber: this.stepNumber, translate });
  }

  render() {
    return (
      <Host id="KStepperHeaderItem" class="KStepperHeaderItem">
        {this.stepNumber !== 1 && <div class="KStepperHeaderItem-line"></div>}
        <div class="KStepperHeaderItem-step">
          <div
            class={clsx('KStepperHeaderItem-flip-box', [
              this.isEnded() && 'editable'
            ])}
          >
            <div class="KStepperHeaderItem-flip-box-inner">
              <a
                href="#"
                class={clsx('KStepperHeaderItem-button front', {
                  started: this.isStated(),
                  ended: this.isEnded()
                })}
                onClick={(ev) => this.handleChangeStep(ev)}
              >
                {this.isEnded() ? <i class="vuh-done"></i> : this.stepNumber}
              </a>
              <a
                href="#"
                class="KStepperHeaderItem-button back"
                onClick={(ev) => this.handleChangeStep(ev)}
              >
                <i class="vuh-edit"></i>
              </a>
            </div>
          </div>
          <div
            class={clsx('KStepperHeaderItem-label', [
              !this.isNone() && 'bolder'
            ])}
          >
            <slot></slot>
          </div>
        </div>
        {!this.el.getAttribute('last') && (
          <div class="KStepperHeaderItem-line"></div>
        )}
      </Host>
    );
  }
}
