import { newSpecPage } from '@stencil/core/testing';
import { Modal } from './k-modal';

describe('k-modal', () => {
  it('k-modal', async () => {
    const { root } = await newSpecPage({
      components: [Modal],
      html: '<k-modal></k-modal>'
    });

    expect(root).toEqualHtml(`
      <k-modal>
        <mock:shadow-root>
          <div class="KModal">
            <div class="KModal-content">
              <div class="KModal-close">
                <i class="KModal-btn vuh-close"></i>
              </div>
              <div class="KModal-body">
                <slot></slot>
              </div>
            </div>
            <div class="KModal-background"></div>
          </div>
        </mock:shadow-root>
      </k-modal>
    `);
  });

  it('k-modal should be opened', async () => {
    const { root } = await newSpecPage({
      components: [Modal],
      html: '<k-modal show></k-modal>'
    });

    expect(root).toEqualHtml(`
      <k-modal show>
        <mock:shadow-root>
          <div class="KModal --is-shown">
            <div class="KModal-content">
              <div class="KModal-close">
                <i class="KModal-btn vuh-close"></i>
              </div>
              <div class="KModal-body">
                <slot></slot>
              </div>
            </div>
            <div class="KModal-background"></div>
          </div>
        </mock:shadow-root>
      </k-modal>
    `);
  });

  it('k-modal should have close button hidden', async () => {
    const { root } = await newSpecPage({
      components: [Modal],
      html: '<k-modal hide-close-button="true"></k-modal>'
    });

    expect(root).toEqualHtml(`
      <k-modal hide-close-button="true">
        <mock:shadow-root>
          <div class="KModal">
            <div class="KModal-content">
              <div class="KModal-body">
                <slot></slot>
              </div>
            </div>
            <div class="KModal-background"></div>
          </div>
        </mock:shadow-root>
      </k-modal>
    `);
  });
});
