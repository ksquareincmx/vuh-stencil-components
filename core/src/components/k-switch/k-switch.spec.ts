import { newSpecPage } from '@stencil/core/testing';
import { Switch } from './k-switch';

describe('k-switch', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [Switch],
      html: '<k-switch></k-switch>'
    });

    expect(root).toEqualHtml(`
      <k-switch class="KSwitch">
        <mock:shadow-root>
          <input
            id="k-checkbox"
            type="checkbox"
            class="KSwitch-state"
          />
          <label htmlFor="k-checkbox" class="KSwitch-action"></label>
        </mock:shadow-root>
      </k-switch>
    `);
  });

  it('should be disabled', async () => {
    const { root } = await newSpecPage({
      components: [Switch],
      html: '<k-switch disabled></k-switch>'
    });

    expect(root).toEqualHtml(`
      <k-switch class="KSwitch" disabled>
        <mock:shadow-root>
          <input
            id="k-checkbox"
            type="checkbox"
            class="KSwitch-state"
            disabled
          />
          <label htmlFor="k-checkbox" class="KSwitch-action"></label>
        </mock:shadow-root>
      </k-switch>
    `);
  });

  it('label should be "check"', async () => {
    const { root } = await newSpecPage({
      components: [Switch],
      html: '<k-switch label="check"></k-switch>'
    });

    expect(root).toEqualHtml(`
      <k-switch class="KSwitch" label="check">
        <mock:shadow-root>
          <input
            id="k-checkbox"
            type="checkbox"
            class="KSwitch-state"
          />
          <label htmlFor="k-checkbox" class="KSwitch-action"></label>
          <label class="KSwitch-text">check</label>
        </mock:shadow-root>
      </k-switch>
    `);
  });

  it('should be checked', async () => {
    const { root } = await newSpecPage({
      components: [Switch],
      html: '<k-switch checked></k-switch>'
    });

    expect(root).toEqualHtml(`
      <k-switch class="KSwitch" checked>
        <mock:shadow-root>
          <input
            id="k-checkbox"
            type="checkbox"
            class="KSwitch-state"
            checked
          />
          <label htmlFor="k-checkbox" class="KSwitch-action"></label>
        </mock:shadow-root>
      </k-switch>
    `);
  });
});
