import { Component, h, Prop, State, Host } from '@stencil/core';

@Component({
  tag: 'k-img',
  styleUrl: 'k-img.scss',
  shadow: true
})
export class Img {
  private refEl: HTMLElement;
  @State() show: boolean = false;

  @Prop() src: string;
  @Prop() alt?: string;
  @Prop() height?: number;
  @Prop() width?: number;
  @Prop() fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down' = 'fill';

  nearScreen() {
    if ('IntersectionObserver' in window) {
      const observer = new window.IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.show = true;
          observer.disconnect();
        }
      });
      observer.observe(this.refEl);
    } else {
      this.show = true;
    }
  }

  componentDidRender() {
    this.nearScreen();
  }

  render() {
    return (
      <Host ref={(el: HTMLElement) => (this.refEl = el)}>
        {this.show && (
          <img
            src={this.src}
            alt={this.alt}
            height={this.height}
            width={this.width}
            style={{ objectFit: this.fit }}
          />
        )}
      </Host>
    );
  }
}
