import { newSpecPage } from '@stencil/core/testing';
import { Input } from './k-input';

describe('k-input', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [Input],
      html: '<k-input></k-input>'
    });
    expect(root).toEqualHtml(`
      <k-input>
        <mock:shadow-root>
            <div class="KInput">
                <input id="k-input" placeholder=" " type="text" value="">
                <label htmlfor="k-input">
                    Default
                </label>
                <div class="KInput-icon"></div>
            </div>
        </mock:shadow-root>
      </k-input>
    `);
  });

  it('should a have a given type other than text', async () => {
    const { root } = await newSpecPage({
      components: [Input],
      html: '<k-input type="password"></k-input>'
    });
    expect(root).toEqualHtml(`
      <k-input type="password">
        <mock:shadow-root>
            <div class="KInput">
                <input id="k-input" placeholder=" " type="password" value="">
                <label htmlfor="k-input">
                    Default
                </label>
                <div class="KInput-icon"></div>
            </div>
        </mock:shadow-root>
      </k-input>
    `);
  });

  it('should have a given label', async () => {
    const { root } = await newSpecPage({
      components: [Input],
      html: '<k-input label="Hello"></k-input>'
    });
    expect(root).toEqualHtml(`
      <k-input label="Hello">
        <mock:shadow-root>
            <div class="KInput">
                <input id="k-input" placeholder=" " type="text" value="">
                <label htmlfor="k-input">
                    Hello
                </label>
                <div class="KInput-icon"></div>
            </div>
        </mock:shadow-root>
      </k-input>
    `);
  });

  it('should have a predefined value', async () => {
    const { root } = await newSpecPage({
      components: [Input],
      html: '<k-input value="hello"></k-input>'
    });
    expect(root).toEqualHtml(`
      <k-input value="hello">
        <mock:shadow-root>
            <div class="KInput">
                <input id="k-input" placeholder=" " type="text" value="hello">
                <label htmlfor="k-input">
                    Default
                </label>
                <div class="KInput-icon"></div>
            </div>
        </mock:shadow-root>
      </k-input>
    `);
  });

  it('should be disabled', async () => {
    const { root } = await newSpecPage({
      components: [Input],
      html: '<k-input disabled></k-input>'
    });
    expect(root).toEqualHtml(`
      <k-input disabled>
        <mock:shadow-root>
            <div class="KInput">
                <input id="k-input" placeholder=" " type="text" value="" disabled>
                <label htmlfor="k-input">
                    Default
                </label>
                <div class="KInput-icon"></div>
            </div>
        </mock:shadow-root>
      </k-input>
    `);
  });

  it('should have a successful validation state', async () => {
    const { root } = await newSpecPage({
      components: [Input],
      html: '<k-input validation-state="success"></k-input>'
    });
    expect(root).toEqualHtml(`
      <k-input validation-state="success">
        <mock:shadow-root>
            <div class="KInput">
                <input id="k-input" class="--is-valid" placeholder=" " type="text" value="">
                <label class="--is-valid" htmlfor="k-input">
                    Default
                </label>
                <div class="KInput-icon --is-valid">
                    <k-icon name="check-circle" size="medium"></k-icon>
                </div>
            </div>
        </mock:shadow-root>
      </k-input>
    `);
  });

  it('should have an unsuccessful validation state', async () => {
    const { root } = await newSpecPage({
      components: [Input],
      html: '<k-input validation-state="error"></k-input>'
    });
    expect(root).toEqualHtml(`
      <k-input validation-state="error">
        <mock:shadow-root>
            <div class="KInput">
                <input id="k-input" class="--is-invalid" placeholder=" " type="text" value="">
                <label class="--is-invalid" htmlfor="k-input">
                    Default
                </label>
                <div class="KInput-icon --is-invalid">
                    <k-icon name="alert-circle" size="medium"></k-icon>
                </div>
            </div>
        </mock:shadow-root>
      </k-input>
    `);
  });

  it('should have a given name', async () => {
    const { root } = await newSpecPage({
      components: [Input],
      html: '<k-input name="hello"></k-input>'
    });
    expect(root).toEqualHtml(`
      <k-input name="hello">
        <mock:shadow-root>
            <div class="KInput">
                <input id="k-input" placeholder=" " name="hello" type="text" value="">
                <label htmlfor="k-input">
                    Default
                </label>
                <div class="KInput-icon"></div>
            </div>
        </mock:shadow-root>
      </k-input>
    `);
  });

  it('should have a helper text', async () => {
    const { root } = await newSpecPage({
      components: [Input],
      html: '<k-input helper-text="Hello."></k-input>'
    });
    expect(root).toEqualHtml(`
      <k-input helper-text="Hello.">
        <mock:shadow-root>
            <div class="KInput">
                <input id="k-input" placeholder=" " type="text" value="">
                <label htmlfor="k-input">
                    Default
                </label>
                <span class="KInput-helper-text">
                    Hello.
                </span>
                <div class="KInput-icon"></div>
            </div>
        </mock:shadow-root>
      </k-input>
    `);
  });

  it('should have a maximum length', async () => {
    const { root } = await newSpecPage({
      components: [Input],
      html: '<k-input max-length="5"></k-input>'
    });
    expect(root).toEqualHtml(`
      <k-input max-length="5">
        <mock:shadow-root>
            <div class="KInput">
                <input id="k-input" placeholder=" " maxlength="5" type="text" value="">
                <label htmlfor="k-input">
                    Default
                </label>
                <div class="KInput-icon"></div>
            </div>
        </mock:shadow-root>
      </k-input>
    `);
  });

  it('should have a minimum length', async () => {
    const { root } = await newSpecPage({
      components: [Input],
      html: '<k-input min-length="5"></k-input>'
    });
    expect(root).toEqualHtml(`
      <k-input min-length="5">
        <mock:shadow-root>
            <div class="KInput">
                <input id="k-input" placeholder=" " minlength="5" type="text" value="">
                <label htmlfor="k-input">
                    Default
                </label>
                <div class="KInput-icon"></div>
            </div>
        </mock:shadow-root>
      </k-input>
    `);
  });
});
