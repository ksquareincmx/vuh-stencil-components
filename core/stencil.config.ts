import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'vuh-stencil',
  globalStyle: 'css/global.css',
  outputTargets: [
    {
      type: 'dist',
      // esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    reactOutputTarget({
      componentCorePackage: '../../dist/types',
      proxiesFile: './component-library-react/src/components.ts',
    }),
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/styles/global.scss', 'src/styles/variables.scss']
    }),
  ],
  watchIgnoredRegex: /\.stories\.(js|jsx|ts|tsx|mdx)$/, // ignore storybook files in --watch mode
};