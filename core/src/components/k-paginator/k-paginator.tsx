import { Component, h, Prop, Watch, Element } from '@stencil/core';
import clsx from 'clsx';

@Component({
  tag: 'k-paginator',
  styleUrl: 'k-paginator.scss',
  shadow: true
})
export class Paginator {
  @Element() el: HTMLInputElement;

  @Prop() totalPages: number;
  @Prop({ mutable: true }) currentPage?: number = 1;

  private renderPages() {
    const middleArray = [];
    let start = 2;
    let end = 6;

    if (this.currentPage > 4 && this.currentPage < this.totalPages - 2) {
      start = this.currentPage - 2;
      end = this.currentPage + 2;
    } else if (this.currentPage <= 4) {
      start = 2;
      end = this.totalPages < 7 ? this.totalPages - 1 : 6;
    } else if (this.currentPage >= this.totalPages - 2) {
      start = this.totalPages - 5;
      end = this.totalPages - 1;
    }

    let i = 0;

    for (let l = start; l <= end; l++) {
      middleArray[i] = l;
      i++;
    }

    return middleArray.map((page) => (
      <div
        class={clsx('KPaginator-page', {
          '--is-current-page': page === this.currentPage
        })}
        onClick={this.onPageClick}
      >
        {page}
      </div>
    ));
  }

  @Watch('currentPage')
  onCurrentPageChanged() {
    this.renderPages();
  }

  componentDidLoad() {
    if (this.currentPage > this.totalPages) {
      this.currentPage = 1;
    }
  }

  private onPageClick = (e: Event) => {
    e.stopPropagation();
    const target = e.target || e.srcElement;
    this.currentPage = target['innerHTML'].replace(/[^0-9]+/, '');
    this.el.value = String(this.currentPage);
    this.el.click();
  };

  private onLeftArrowClick = (e: Event) => {
    e.stopPropagation();
    if (this.currentPage > 1) {
      this.currentPage--;
    }
    this.el.value = String(this.currentPage);
    this.el.click();
  };

  private onRightArrowClick = (e: Event) => {
    e.stopPropagation();
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
    this.el.value = String(this.currentPage);
    this.el.click();
  };

  render() {
    return (
      <div class="KPaginator">
        {this.totalPages && (
          <div class="KPaginator-contents">
            <div class="KPaginator-left-arrow">
              <i
                onClick={this.onLeftArrowClick}
                class="KPaginator-icon vuh-keyboard-arrow-left"
              ></i>
            </div>
            <div class="KPaginator-separator"></div>
            <div class="KPaginator-pages">
              {this.totalPages > 1 && (
                <div
                  class={clsx('KPaginator-page', {
                    '--is-current-page': 1 === this.currentPage
                  })}
                  onClick={this.onPageClick}
                >
                  {this.currentPage > 4 && this.totalPages > 7 ? `${1} ...` : 1}
                </div>
              )}
              {this.renderPages()}
              <div
                class={clsx('KPaginator-page', {
                  '--is-current-page': this.totalPages === this.currentPage
                })}
                onClick={this.onPageClick}
              >
                {this.currentPage < this.totalPages - 3 && this.totalPages > 7
                  ? `... ${this.totalPages}`
                  : this.totalPages}
              </div>
            </div>
            <div class="KPaginator-separator"></div>
            <div class="KPaginator-right-arrow">
              <i
                onClick={this.onRightArrowClick}
                class="KPaginator-icon vuh-keyboard-arrow-right"
              ></i>
            </div>
          </div>
        )}
      </div>
    );
  }
}
