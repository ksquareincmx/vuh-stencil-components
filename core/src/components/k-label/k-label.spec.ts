import { newSpecPage } from "@stencil/core/testing";
import { KLabel } from "./k-label";

describe("k-label", () => {
  it("renders", async () => {
    const { root } = await newSpecPage({
      components: [KLabel],
      html: "<k-label></k-label>",
    });
    expect(root).toEqualHtml(`
      <k-label>
          <label>
            This is a label
          </label>
      </k-label>
    `);
  });

  it("renders with htmlfor", async () => {
    const { root } = await newSpecPage({
      components: [KLabel],
      html: `<k-label htmlfor="input"></k-label>`,
    });
    expect(root).toEqualHtml(`
    <k-label htmlfor="input">
        <label htmlfor="input">
            This is a label
        </label>
    </k-label>
    `);
  });
});
