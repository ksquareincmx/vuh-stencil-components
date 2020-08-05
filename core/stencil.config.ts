import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'vuh-stencil',
  taskQueue: 'async',
  globalStyle: 'css/global.bundle.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [{ src: '**/*.scss' }]
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    {
      type: 'www',
      copy: [{ src: 'fonts', dest: 'fonts' }]
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: ['src/styles/global.bundle.scss']
    })
  ]
};
