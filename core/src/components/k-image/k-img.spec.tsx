import { newSpecPage } from '@stencil/core/testing';
import { Img } from './k-img';

describe('k-img', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [Img],
      html: '<k-img src=""></k-img>'
    });

    expect(root).toEqualHtml(`
      <k-img src="">
        <mock:shadow-root>
        </mock:shadow-root>
      </k-img>
    `);
  });

  it('should be rendered with props', async () => {
    const { root } = await newSpecPage({
      components: [Img],
      html: '<k-img src="" alt="" height="10" width="10" fit="fill"></k-img>'
    });

    expect(root).toEqualHtml(`
      <k-img src="" alt="" height="10" width="10" fit="fill">
        <mock:shadow-root>
        </mock:shadow-root>
      </k-img>
    `);
  });
});
