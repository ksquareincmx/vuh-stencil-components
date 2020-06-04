import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "k-ui-kit",
  taskQueue: "async",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "docs-readme",
    },
    {
      type: "dist",
      esmLoaderPath: "../loader",
      copy: [{ src: "**/*.scss" }],
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: ["src/css/variables.scss"],
    }),
  ],
};
