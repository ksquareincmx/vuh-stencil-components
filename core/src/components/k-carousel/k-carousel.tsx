import { Component, h, Host, Element, Prop, State } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-carousel',
  styleUrl: 'k-carousel.scss',
  shadow: true
})
export class Carousel {
  private DIRECTION = {
    LEFT: Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
  };

  private MAX_STEPS_PERCENTAGE = 100;

  private slidesContainer?: HTMLElement;

  @Element() el: HTMLElement;
  @Prop() showDots: boolean = true;
  @Prop() steps: number = 1;
  @Prop() transitionDuration: number = 600;

  @State() currentSlide: number = 0;
  @State() distance = this.MAX_STEPS_PERCENTAGE / this.steps;

  changeSlide(direction) {
    switch (direction) {
      case this.DIRECTION.RIGHT:
        this.showSlide(this.currentSlide - this.distance);
        break;
      case this.DIRECTION.LEFT:
        this.showSlide(this.currentSlide + this.distance);
        break;
    }
  }

  showSlide(slide) {
    this.slidesContainer.style.transform = `translateX(${slide}%)`;
    this.currentSlide = slide;
  }

  showLeftArrow() {
    return this.currentSlide < 0;
  }

  showRightArrow() {
    return (
      this.currentSlide >
      -(this.el.children.length - 1) * this.MAX_STEPS_PERCENTAGE
    );
  }

  isHighlighted(index) {
    const minValue = -(index * this.MAX_STEPS_PERCENTAGE);
    const maxValue = -((index + 1) * this.MAX_STEPS_PERCENTAGE - this.distance);

    return minValue >= this.currentSlide && this.currentSlide >= maxValue;
  }

  render() {
    return (
      <Host class="KCarousel">
        <div class="KCarousel-container">
          <div
            style={{ transition: `${this.transitionDuration}ms` }}
            class="KCarousel-slides"
            ref={(el: HTMLElement) => (this.slidesContainer = el)}
          >
            <slot></slot>
          </div>
        </div>
        {this.showLeftArrow() && (
          <a
            class="KCarousel-arrow left"
            onClick={this.changeSlide.bind(this, this.DIRECTION.LEFT)}
          >
            <i class="vuh-keyboard-arrow-left" />
          </a>
        )}
        {this.showRightArrow() && (
          <a
            class="KCarousel-arrow right"
            onClick={this.changeSlide.bind(this, this.DIRECTION.RIGHT)}
          >
            <i class="vuh-keyboard-arrow-right" />
          </a>
        )}

        {this.showDots && (
          <div class="KCarousel-dots">
            {Array.from(this.el.children).map((_, index) => (
              <span
                class={clsx('KCarousel-dot', {
                  'is-active': this.isHighlighted(index)
                })}
                onClick={this.showSlide.bind(
                  this,
                  -(index * this.MAX_STEPS_PERCENTAGE)
                )}
              ></span>
            ))}
          </div>
        )}
      </Host>
    );
  }
}
