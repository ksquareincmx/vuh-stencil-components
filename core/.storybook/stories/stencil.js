import path from 'path';
import Case, { kebab } from 'case';
import { storiesOf } from '@storybook/html';
import * as KNOBS from '@storybook/addon-knobs';

/*******************************************************************************
 * You should not need to edit anything within this file unless you really     *
 * want to get your hands dirty and customize the generation of stories.       *
 * If you configured the correct require contexts, then you should be have     *
 * a decently working storybook project which displays all of your components  *
 * with working knobs and different states.                                    *
 *******************************************************************************/

const DEFAULT_DATE = new Date();

/**
 * Given a module, iterates over the exports and returns the first
 * one which looks like a stencil component (using duck typing).
 */
function getComponentFromExports(_module) {
  const key = Object.keys(_module).find((exportKey) => {
    const _export = _module[exportKey];
    // does it quack like a stencil class component?
    if (_export.prototype && _export.is && _export.encapsulation) {
      return true;
    }
  });

  return _module[key];
}

/**
 * Given a property (from stencil Component.properties) and an optional
 * knobOptions object generates a knob which can be used to
 * dynamically update the properties of the component.
 */
function getKnobForProp(prop, knobOptions = {}) {
  let type = 'text';
  let args = [prop.attribute];

  // knob options can defined using camelCase or kebab-case
  const propCamel = Case.camel(prop.attribute);
  const options = knobOptions[propCamel] || knobOptions[prop.attribute];

  // if knob options are defined, use those
  if (options) {
    type = options.type;
    args = args.concat(options.args);
  }
  // otherwise, implicitly create knobs based on prop type or attribute name
  else if (/^(?:number|boolean|object)$/i.test(prop.type)) {
    type = prop.type.toLowerCase();
  } else if (/^(?:string)$/i.test(prop.type)) {
    if (
      !/^(?:string|number|boolean|object)$/i.test(prop.complexType.original)
    ) {
      const arrOptions = prop.complexType.original.split(' | ');
      const selectOptions = arrOptions.map((o) =>
        o.match(/('(\w|-)+')/g) ? o.replace(/'|\|/gi, '').trim() : o
      );

      type = 'select';
      args[1] = selectOptions;
    }
  } else if (prop.attribute.indexOf('date') !== -1) {
    type = 'date';
    args[1] = DEFAULT_DATE;
  }

  if (prop.defaultValue) {
    try {
      let defaultVal = prop.defaultValue;

      if (typeof defaultVal === 'string') {
        defaultVal =
          /('\w+')/g.test(defaultVal) || /('')/g.test(defaultVal)
            ? /('')/g.test(defaultVal)
              ? 'Example Label'
              : defaultVal.replace(/'/gi, '')
            : JSON.parse(defaultVal);
      }

      if (type !== 'select') {
        args[1] = defaultVal;
      } else {
        args[2] = defaultVal;
      }
    } catch (e) {
      args[1] =
        typeof prop.defaultValue === 'string' ? prop.defaultValue : undefined;
    }
  }

  console.log('generating', type, 'knob with args:', args);
  const val = KNOBS[type].apply(null, args);

  switch (type) {
    // knobs returns UNIX timestamp for "date" type
    // and we need to convert it to ISO-8601
    case 'date':
      return new Date(val).toISOString();
  }

  return val;
}

/**
 * Generates DOM strings from states to show as code.
 */
function createNodesCodeString(elements, level) {
  let str = '';
  let tabs = '';
  for (let i = 0; i <= level; i++) {
    tabs += '&nbsp;';
  }
  if (elements && elements.length > 0) {
    elements.forEach(({ tag, innerText, props, children }) => {
      let result = createNodesCodeString(children, level + 1);
      const attrs = Object.keys(props || {})
        .filter((prop) => props[prop] != null)
        .map((prop) => {
          return `${Case.kebab(prop)}="${props[prop]}"`;
        })
        .join(' ');
      if (result !== '') {
        str += `<br>${tabs}&lt;${tag}${
          attrs ? ' ' + attrs : ''
        }&gt;${result}<br>${tabs}&lt;/${tag}&gt;`;
      } else {
        str += `<br>  &lt;${tag}${
          attrs ? ' ' + attrs : ''
        }&gt;${innerText}&lt;/${tag}&gt;`;
      }
    });
  }
  return str;
}

/**
 * Template used to render a single stencil component. To use this template
 * do something like the following code snippet:
 *
 *   ```
 *   const container = document.createElement('div');
 *   const component = document.createElement('your-component');
 *   container.innerHTML = getStencilTemplate('Some Title', 'Some Description');
 *   container.querySelector('.placeholder').appendChild(component);
 *   ```
 */
function getStencilTemplate({ title, description, tag, props, children }) {
  // build attribute="value" strings
  const attrs = Object.keys(props || {})
    .filter((prop) => props[prop] != null)
    .map((prop) => {
      return `${Case.kebab(prop)}="${props[prop]}"`;
    })
    .join(' ');

  let child = createNodesCodeString(children, 0);

  let template =
    `
        <div class="component-area">
            <h2>${title}</h2>
            ${description ? '<p>' + description + '</p>' : ''}
            <div class="placeholder">
              <!-- the component will be inserted here -->
            </div>
            <div class="code-block">
                <pre><code>` +
    `&lt;${tag}${attrs ? ' ' + attrs : ''}&gt;${child}<br>&lt;/${tag}&gt;` +
    `</code></pre>
                <a class="select-code">Select Code</a>
            </div>
        </div>
    `;

  return template;
}

/**
 * Given a stencil Component and knob options, returns an dictionary of
 * all the properties and default values.
 */
function getPropsWithKnobValues(Component, knobOptions = {}) {
  return Object.keys(Component.properties || {}).reduce((obj, key) => {
    const property = Component.properties[key];

    // normalize older "attr" into newer "attribute" property
    if (property.hasOwnProperty('attr')) {
      property.attribute = property.attr;
    }

    if (property.hasOwnProperty('attribute')) {
      obj[Case.kebab(key)] = getKnobForProp(property, knobOptions);
    }

    return obj;
  }, {});
}

/**
 * Generates DOM nodes from states to render.
 */
function createNodes(el, elements) {
  if (elements && elements.length > 0) {
    elements.forEach(({ tag, innerText, props, children }) => {
      let childEl = document.createElement(tag);
      childEl.innerHTML = innerText;
      if (props) {
        Object.keys(props).forEach((prop) => {
          if (props[prop]) {
            childEl.setAttribute(prop, props[prop]);
          } else {
            childEl.removeAttribute(prop);
          }
        });
      }
      createNodes(childEl, children);
      el.appendChild(childEl);
    });
  }
}

/**
 * Generates an interactive knobs-enabled story for a stencil Component.
 * For any additional states, a static rendering is generated with
 * the given state (see existing components for examples).
 *
 * Example "states" array:
 *
 *   [{
 *     title: 'A title for this state',
 *     description: 'A description of why this state exists',
 *     props: {
 *        --- props to set on your component ---
 *     },
 *     children: [{
 *        tag: 'span',
 *        innerText: 'Lorem ipsum',
 *        children: []
 *     }]
 *   }]
 *
 * Example "knobs" config:
 *
 *   {
 *     someProp: {            // A decorated @Prop() on your component
 *       type: 'color',       // The type of "knob" to use in the knobs panel
 *       args: [              // Additional arguments to pass to the knob **after the "label" argument**
 *         '#ff99cc',         // The defaultValue for the "color" knob
 *         'GROUP-1'          // The groupId for the "color" knob
 *       ]
 *     }
 *   }
 */
function createStencilStory({ Component, notes, states, knobs }, stories) {
  // It is important that the main container element
  // is NOT created inside of the render function below!!
  const mainEl = document.createElement('div');
  const storyOpts = notes ? { notes } : {};
  const tag = Component.is;

  // Clone the "states" array and add the default state first
  states = states && states.length ? states.slice(0) : [];
  states.unshift({
    title: 'Default state (use Knobs below to edit props):',
    tag: Component.is,
    props: {},
    children: [{ tag: 'span', innerText: 'Default' }]
  });

  // Create the story with all of the states
  stories.add(
    Component.name,
    () => {
      mainEl.innerHTML = '';

      // First, add the knobs-enabled props to the default state.
      // This MUST be done inside this render function!!
      states[0].props = getPropsWithKnobValues(Component, knobs);

      // Next, render each state. Only the first one is interactive (with knobs).
      // This is sort of a light-weight "chapters" addon because the community
      // "chapters" addon only works with react :/
      states.forEach(({ title, description, props, children }) => {
        const containerEl = document.createElement('div');
        const componentEl = document.createElement(String(tag));

        if (props) {
          Object.keys(props).forEach((prop) => {
            if (props[prop]) {
              componentEl.setAttribute(prop, props[prop]);
            } else {
              componentEl.removeAttribute(prop);
            }
          });
        }

        if (children) {
          createNodes(componentEl, children);
        }

        containerEl.innerHTML = getStencilTemplate({
          title,
          description,
          tag,
          props,
          children
        });

        containerEl.querySelector(`.placeholder`).appendChild(componentEl);
        mainEl.appendChild(containerEl);
      });

      return mainEl;
    },
    storyOpts
  );
}

/**
 * Cleans the notes, which should be in markdown format.
 * The markdown parser used by the notes addon is not the best, so
 * we have to fix some issues before rendering.
 */
function cleanNotes(notes) {
  if (notes) {
    // replaces "\|" with "` `" so property tables to break
    return notes.replace(/\\\|/g, '` `');
  }
}

function buildGeneratorConfigs(componentsCtx, storiesCtx) {
  const componentKeys = componentsCtx.keys();
  const storyKeys = storiesCtx.keys();

  return componentKeys.reduce((obj, compKey) => {
    const _module = componentsCtx(compKey);
    const Component = getComponentFromExports(_module);
    const dirName = '/' + path.basename(path.dirname(compKey)) + '/';
    const storyKey = storyKeys.find((k) => k.indexOf(dirName) > -1);

    if (!Component) {
      console.warn(`Couldn't load component ${compKey}`);
      return obj;
    }

    if (storyKey) {
      const _export = storiesCtx(storyKey).default;

      // If the default export is a function, then that function should
      // be used to create the story. It will be passed the "stories" object
      // where it should call stories.add(...) manually.
      if (typeof _export === 'function') {
        return Object.assign(obj, {
          [Component.name]: _export
        });
      }

      return Object.assign(obj, {
        [Component.name]: {
          Component,
          states: _export.states,
          knobs: _export.knobs,
          notes: cleanNotes(_export.notes)
        }
      });
    }

    return Object.assign(obj, {
      [Component.name]: {
        Component
      }
    });
  }, {});
}

/**
 * Iterates all of the stencil contexts and build a "config" object
 * which is used to generate the individual stories.
 */
function buildStencilStories(name, componentsCtx, storiesCtx) {
  const configs = buildGeneratorConfigs(componentsCtx, storiesCtx);

  const stories = storiesOf(name, module);
  stories.addDecorator(KNOBS.withKnobs);

  Object.keys(configs)
    .map((comp) => configs[comp])
    .forEach((config) =>
      typeof config === 'function'
        ? // If the config is a function, call it with the stories context.
          // The function is responsible for calling stories.add(...) manually.
          // Pass any additional utilities such as knobs.
          config(stories, KNOBS)
        : createStencilStory(config, stories)
    );
}

export default buildStencilStories;
