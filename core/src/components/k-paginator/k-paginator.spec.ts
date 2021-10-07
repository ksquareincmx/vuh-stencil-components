import { newSpecPage } from '@stencil/core/testing';
import { Paginator } from './k-paginator';

describe('k-paginator', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [Paginator],
      html: '<k-paginator></k-paginator>'
    });
    expect(root).toEqualHtml(`
      <k-paginator>
        <mock:shadow-root>
            <div class="KPaginator">
            </div>
        </mock:shadow-root>
      </k-paginator>
    `);
  });

  it('should have an specified total number of pages', async () => {
    const { root } = await newSpecPage({
      components: [Paginator],
      html: '<k-paginator total-pages="3"></k-paginator>'
    });
    expect(root).toEqualHtml(`
      <k-paginator total-pages="3">
        <mock:shadow-root>
            <div class="KPaginator">
                <div class="KPaginator-contents">
                    <div class="KPaginator-left-arrow">
                        <i class="KPaginator-icon vuh-keyboard-arrow-left"></i>
                    </div>
                    <div class="KPaginator-separator"></div>
                    <div class="KPaginator-pages">
                        <div class="KPaginator-page --is-current-page">
                            1
                        </div>
                        <div class="KPaginator-page">
                            2
                        </div>
                        <div class="KPaginator-page">
                            3
                        </div>
                    </div>
                    <div class="KPaginator-separator"></div>
                    <div class="KPaginator-right-arrow">
                        <i class="KPaginator-icon vuh-keyboard-arrow-right"></i>
                    </div>
                </div>
            </div>
        </mock:shadow-root>
      </k-paginator>
    `);
  });

  it('should be empty if an specific current-page is given, but no total amount of pages is given', async () => {
    const { root } = await newSpecPage({
      components: [Paginator],
      html: '<k-paginator current-page="2"></k-paginator>'
    });
    expect(root).toEqualHtml(`
      <k-paginator current-page="2">
        <mock:shadow-root>
            <div class="KPaginator">
            </div>
        </mock:shadow-root>
      </k-paginator>
    `);
  });

  it('should have an specified current page that is no greater than the total amount of pages', async () => {
    const { root } = await newSpecPage({
      components: [Paginator],
      html: '<k-paginator current-page="2" total-pages="3"></k-paginator>'
    });
    expect(root).toEqualHtml(`
      <k-paginator current-page="2" total-pages="3">
        <mock:shadow-root>
            <div class="KPaginator">
                <div class="KPaginator-contents">
                    <div class="KPaginator-left-arrow">
                        <i class="KPaginator-icon vuh-keyboard-arrow-left"></i>
                    </div>
                    <div class="KPaginator-separator"></div>
                    <div class="KPaginator-pages">
                        <div class="KPaginator-page">
                            1
                        </div>
                        <div class="KPaginator-page --is-current-page">
                            2
                        </div>
                        <div class="KPaginator-page">
                            3
                        </div>
                    </div>
                    <div class="KPaginator-separator"></div>
                    <div class="KPaginator-right-arrow">
                        <i class="KPaginator-icon vuh-keyboard-arrow-right"></i>
                    </div>
                </div>
            </div>
        </mock:shadow-root>
      </k-paginator>
    `);
  });

  it('should have its current page set to 1 if the given current page is greater than the given total amount of pages', async () => {
    const { root } = await newSpecPage({
      components: [Paginator],
      html: '<k-paginator current-page="4" total-pages="3"></k-paginator>'
    });
    expect(root).toEqualHtml(`
      <k-paginator current-page="4" total-pages="3">
        <mock:shadow-root>
            <div class="KPaginator">
                <div class="KPaginator-contents">
                    <div class="KPaginator-left-arrow">
                        <i class="KPaginator-icon vuh-keyboard-arrow-left"></i>
                    </div>
                    <div class="KPaginator-separator"></div>
                    <div class="KPaginator-pages">
                        <div class="KPaginator-page --is-current-page">
                            1
                        </div>
                        <div class="KPaginator-page">
                            2
                        </div>
                        <div class="KPaginator-page">
                            3
                        </div>
                    </div>
                    <div class="KPaginator-separator"></div>
                    <div class="KPaginator-right-arrow">
                        <i class="KPaginator-icon vuh-keyboard-arrow-right"></i>
                    </div>
                </div>
            </div>
        </mock:shadow-root>
      </k-paginator>
    `);
  });
});
