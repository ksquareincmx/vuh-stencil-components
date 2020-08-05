import { configure } from '@storybook/html';
import buildStencilStories from './stories/stencil';
import '../www/build/vuh-stencil.css';

// The following contexts will be used to generate stories
// for multiple collections of components. This is particulary
// useful for monorepos where multiple packages might exist.
const loader = require('../loader/index.cjs.js');

const COLLECTIONS = [
  {
    name: 'Vuh Stencil',
    componentsCtx: require.context(
      '../dist/collection',
      true,
      /\/components\/([^/]+)\/\1\.js$/
    ),
    storiesCtx: require.context('../src', true, /\.story\.tsx$/)
  }
];

function loadStories() {
  loader.defineCustomElements(window);
  COLLECTIONS.forEach(({ name, componentsCtx, storiesCtx }) => {
    buildStencilStories(name, componentsCtx, storiesCtx);
  });
}

configure(loadStories, module);
