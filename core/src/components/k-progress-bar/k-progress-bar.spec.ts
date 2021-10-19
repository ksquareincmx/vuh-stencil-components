import { newSpecPage } from '@stencil/core/testing';
import { ProgressBar } from './k-progress-bar';

describe('k-progress-bar', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [ProgressBar],
      html: '<k-progress-bar></k-progress-bar>'
    });

    expect(root).toEqualHtml(`
      <k-progress-bar>
        <mock:shadow-root>
          <label htmlFor="k-progress-bar" class="KProgressBar-label">
            Progress • 0%
          </label>
          <progress
            class="KProgressBar-load"
            id="k-progress-bar"
            value="0"
            max="100"
          ></progress>
        </mock:shadow-root>
      </k-progress-bar>
    `);
  });

  it('value should be "60%"', async () => {
    const { root } = await newSpecPage({
      components: [ProgressBar],
      html: '<k-progress-bar value="60"></k-progress-bar>'
    });

    expect(root).toEqualHtml(`
      <k-progress-bar value="60">
        <mock:shadow-root>
          <label htmlFor="k-progress-bar" class="KProgressBar-label">
            Progress • 60%
          </label>
          <progress
            class="KProgressBar-load"
            id="k-progress-bar"
            value="60"
            max="100"
          ></progress>
        </mock:shadow-root>
      </k-progress-bar>
    `);
  });
});
