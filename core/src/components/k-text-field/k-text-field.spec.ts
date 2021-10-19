import { newSpecPage } from '@stencil/core/testing';
import { TextField } from './k-text-field';

describe('k-text-field', () => {
  it('render', async () => {
    const { root } = await newSpecPage({
      components: [TextField],
      html: '<k-text-field></k-text-field>'
    });

    expect(root).toEqualHtml(`
      <k-text-field>
        <mock:shadow-root>
          <div class="KTextField">
            <textarea id="k-text-field" placeholder=" " value=""></textarea>
            <label htmlfor="k-text-field">Default</label>
            <div class="KTextField-footer"></div>
          </div>
        </mock:shadow-root>
      </k-text-field>
    `);
  });

  it('label should be "Name"', async () => {
    const { root } = await newSpecPage({
      components: [TextField],
      html: '<k-text-field label="Name"></k-text-field>'
    });

    expect(root).toEqualHtml(`
      <k-text-field label="Name">
        <mock:shadow-root>
          <div class="KTextField">
            <textarea id="k-text-field" placeholder=" " value=""></textarea>
            <label htmlfor="k-text-field">Name</label>
            <div class="KTextField-footer"></div>
          </div>
        </mock:shadow-root>
      </k-text-field>
    `);
  });

  it('k-text-field should be disabled', async () => {
    const { root } = await newSpecPage({
      components: [TextField],
      html: '<k-text-field disabled></k-text-field>'
    });

    expect(root).toEqualHtml(`
      <k-text-field disabled>
        <mock:shadow-root>
          <div class="KTextField">
            <textarea id="k-text-field" placeholder=" " value="" disabled></textarea>
            <label htmlfor="k-text-field">Default</label>
            <div class="KTextField-footer"></div>
          </div>
        </mock:shadow-root>
      </k-text-field>
    `);
  });

  it('k-text-field validation should be success', async () => {
    const { root } = await newSpecPage({
      components: [TextField],
      html: '<k-text-field validation-state="success"></k-text-field>'
    });

    expect(root).toEqualHtml(`
      <k-text-field validation-state="success">
        <mock:shadow-root>
          <div class="KTextField">
            <textarea id="k-text-field" class="--is-valid" placeholder=" " value=""></textarea>
            <label htmlfor="k-text-field" class="--is-valid">Default</label>
            <div class="KTextField-footer --is-valid"></div>
          </div>
        </mock:shadow-root>
      </k-text-field>
    `);
  });

  it('k-text-field should include "fill this field" as helper text', async () => {
    const { root } = await newSpecPage({
      components: [TextField],
      html: '<k-text-field helper-text="fill this field"></k-text-field>'
    });

    expect(root).toEqualHtml(`
      <k-text-field helper-text="fill this field">
        <mock:shadow-root>
          <div class="KTextField">
            <textarea id="k-text-field" placeholder=" " value=""></textarea>
            <label htmlfor="k-text-field">Default</label>
            <div class="KTextField-footer">
              <span class="KInput-helper-text">fill this field</span>
            </div>
          </div>
        </mock:shadow-root>
      </k-text-field>
    `);
  });

  it('k-text-field should have 30 chars as max length', async () => {
    const { root } = await newSpecPage({
      components: [TextField],
      html: '<k-text-field max-length="30"></k-text-field>'
    });

    expect(root).toEqualHtml(`
      <k-text-field max-length="30">
        <mock:shadow-root>
          <div class="KTextField">
            <textarea id="k-text-field" placeholder=" " value="" maxLength="30"></textarea>
            <label htmlfor="k-text-field">Default</label>
            <div class="KTextField-footer">
              <span class="KInput-typing-count">
                0 / 30
              </span>
            </div>
          </div>
        </mock:shadow-root>
      </k-text-field>
    `);
  });

  it('k-text-field should have 30 chars as min length', async () => {
    const { root } = await newSpecPage({
      components: [TextField],
      html: '<k-text-field min-length="30"></k-text-field>'
    });

    expect(root).toEqualHtml(`
      <k-text-field min-length="30">
        <mock:shadow-root>
          <div class="KTextField">
            <textarea id="k-text-field" placeholder=" " value="" minLength="30"></textarea>
            <label htmlfor="k-text-field">Default</label>
            <div class="KTextField-footer"></div>
          </div>
        </mock:shadow-root>
      </k-text-field>
    `);
  });
});
