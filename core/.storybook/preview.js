import { defineCustomElements } from '../dist/loader';
import '../css/global.css';

defineCustomElements();
const hasKey = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);
const compareAlphabetical = (a, b) => a.localeCompare(b, { numeric: true });

export const compareStoryPaths = (order, path1, path2) => {
  if (path1.length === 0 && path2.length === 0) {
    return 0;
  }  else if (path1.length === 0 && path2.length > 0) {
    // Path1 must be an ancestor of path2
    return -1;
  } else if (path1.length > 0 && path2.length === 0) {
    // Path2 must be an ancestor of path1
    return 1;
  }
  
  const [path1Head, ...path1Tail] = path1;
  const [path2Head, ...path2Tail] = path2;
  
  if (!order) {
    // No reference order, so just sort alphabetically
    const comp = compareAlphabetical(path1Head, path2Head);
    if (comp === 0) {
      return compareStoryPaths(null, path1Tail, path2Tail);
    } else {
      return comp;
    }
  }
  
  if (path1Head === path2Head) {
    // The two paths share the same head
    const key = path1Head;
    
    if (hasKey(order, key)) {
      return compareStoryPaths(order[key], path1Tail, path2Tail);
    } else {
      return compareStoryPaths(null, path1Tail, path2Tail);
    }
  }
  
  if (!hasKey(order, path1Head) && !hasKey(order, path2Head)) {
    return compareStoryPaths(null, path1, path2);
  } else if (hasKey(order, path1Head) && !hasKey(order, path2Head)) {
    return -1; // Give preference to path1, since it is included in the reference order
  } else if (!hasKey(order, path1Head) && hasKey(order, path2Head)) {
    return 1; // Give preference to path2, since it is included in the reference order
  } else {
    // If both heads are in the reference order, use the ordering of the keys in the reference order
    const orderKeys = Object.keys(order);
    
    return orderKeys.indexOf(path1Head) < orderKeys.indexOf(path2Head) ? -1 : 1;
  }
};

const storiesOrder = {
  'style guide': null,
  'components': {
    'avatar': {
      'all': null,
      'small': null,
      'medium': null,
      'large': null,
    },
    'banner': {},
    'breadcrumbs': {
      'breadcrumbs': null,
      'breadcrumbs item': null
    },
    'buttons': {},
    'card': null,
    'carousel': null,
    'checkbox': null,
    'collapsable': {
      'collapse menu': null,
      'collapse parent': null,
      'collapse list': null,
      'collapse item': null,
    },
    'content': null,
    'dialog': {},
    'divider': {},
    'drawer': {},
    'dropdown': {},
    'elevation': {},
    'grid': {
      'grid': null,
      'column': null,
      'row': null
    }
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: ([story1Id, story1], [story2Id, story2]) => {
      const story1Path = [...story1.kind.split('/'), story1.name].map(key => key.toLowerCase());
      const story2Path = [...story2.kind.split('/'), story2.name].map(key => key.toLowerCase());
      
      return compareStoryPaths(storiesOrder, story1Path, story2Path);
    },
  }
}