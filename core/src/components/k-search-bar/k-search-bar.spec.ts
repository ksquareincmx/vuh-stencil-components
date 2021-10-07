import { newSpecPage } from '@stencil/core/testing';
import { SearchBar } from './k-search-bar';

describe('k-search-bar', () => {
  it('should render', async () => {
    const { root } = await newSpecPage({
      components: [SearchBar],
      html: '<k-search-bar></k-search-bar>'
    });
    expect(root).toEqualHtml(`
      <k-search-bar>
        <mock:shadow-root>
            <div class="KSearchBar-solid">
                <input class="KSearchBar-input" placeholder="Search" value="">
                <i class="KSearchBar-left vuh-search"></i>
                <i class="KSearchBar-right vuh-close"></i>
            </div>
        </mock:shadow-root>
      </k-search-bar>
    `);
  });

  it('should be type outlined', async () => {
    const { root } = await newSpecPage({
      components: [SearchBar],
      html: '<k-search-bar type="outlined"></k-search-bar>'
    });
    expect(root).toEqualHtml(`
      <k-search-bar type="outlined">
        <mock:shadow-root>
            <div class="KSearchBar-outlined">
                <input id="k-search-bar-outlined" placeholder=" " type="outlined" value="">
                <label htmlfor="k-search-bar-outlined">
                    Search
                </label>
                <i class="KSearchBar-icon vuh-search"></i>
            </div>
        </mock:shadow-root>
      </k-search-bar>
    `);
  });

  it('should have a predefined value', async () => {
    const { root } = await newSpecPage({
      components: [SearchBar],
      html: '<k-search-bar value="hello"></k-search-bar>'
    });
    expect(root).toEqualHtml(`
      <k-search-bar value="hello">
        <mock:shadow-root>
            <div class="KSearchBar-solid">
                <input class="KSearchBar-input" placeholder="Search" value="hello">
                <i class="KSearchBar-left KSearchBar-left--is-highlighted vuh-search"></i>
                <i class="KSearchBar-right KSearchBar-right--is-highlighted vuh-close"></i>
            </div>
        </mock:shadow-root>
      </k-search-bar>
    `);
  });

  it('should be disabled', async () => {
    const { root } = await newSpecPage({
      components: [SearchBar],
      html: '<k-search-bar disabled></k-search-bar>'
    });
    expect(root).toEqualHtml(`
      <k-search-bar disabled>
        <mock:shadow-root>
            <div class="KSearchBar-solid">
                <input class="KSearchBar-input" placeholder="Search" value="" disabled>
                <i class="KSearchBar-left KSearchBar-left--is-disabled vuh-search"></i>
                <i class="KSearchBar-right vuh-close"></i>
            </div>
        </mock:shadow-root>
      </k-search-bar>
    `);
  });

  it('should have a name', async () => {
    const { root } = await newSpecPage({
      components: [SearchBar],
      html: '<k-search-bar name="hello"></k-search-bar>'
    });
    expect(root).toEqualHtml(`
      <k-search-bar name="hello">
        <mock:shadow-root>
            <div class="KSearchBar-solid">
                <input class="KSearchBar-input" placeholder="Search" value="" name="hello">
                <i class="KSearchBar-left vuh-search"></i>
                <i class="KSearchBar-right vuh-close"></i>
            </div>
        </mock:shadow-root>
      </k-search-bar>
    `);
  });

  it('should have placeholder text', async () => {
    const { root } = await newSpecPage({
      components: [SearchBar],
      html: '<k-search-bar placeholder="Hello"></k-search-bar>'
    });
    expect(root).toEqualHtml(`
      <k-search-bar placeholder="Hello">
        <mock:shadow-root>
            <div class="KSearchBar-solid">
                <input class="KSearchBar-input" placeholder="Hello" value="">
                <i class="KSearchBar-left vuh-search"></i>
                <i class="KSearchBar-right vuh-close"></i>
            </div>
        </mock:shadow-root>
      </k-search-bar>
    `);
  });

  it('should have a max length of 30 characters', async () => {
    const { root } = await newSpecPage({
      components: [SearchBar],
      html: '<k-search-bar max-length="30"></k-search-bar>'
    });
    expect(root).toEqualHtml(`
      <k-search-bar max-length="30">
        <mock:shadow-root>
            <div class="KSearchBar-solid">
                <input maxlength="30" class="KSearchBar-input" placeholder="Search" value="">
                <i class="KSearchBar-left vuh-search"></i>
                <i class="KSearchBar-right vuh-close"></i>
            </div>
        </mock:shadow-root>
      </k-search-bar>
    `);
  });

  it('should have a min length of 30 characters', async () => {
    const { root } = await newSpecPage({
      components: [SearchBar],
      html: '<k-search-bar min-length="30"></k-search-bar>'
    });
    expect(root).toEqualHtml(`
      <k-search-bar min-length="30">
        <mock:shadow-root>
            <div class="KSearchBar-solid">
                <input minlength="30" class="KSearchBar-input" placeholder="Search" value="">
                <i class="KSearchBar-left vuh-search"></i>
                <i class="KSearchBar-right vuh-close"></i>
            </div>
        </mock:shadow-root>
      </k-search-bar>
    `);
  });
});
