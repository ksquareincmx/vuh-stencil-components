'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

const loader = require('k-ui-kit/loader');
const tslib = require('tslib');
const React = _interopDefault(require('react'));
const ReactDom = _interopDefault(require('react-dom'));

const attachEventProps = (node, newProps, oldProps = {}) => {
    // add any classes in className to the class list
    const className = getClassName(node.classList, newProps, oldProps);
    if (className !== "") {
        node.className = className;
    }
    Object.keys(newProps).forEach((name) => {
        if (name === "children" ||
            name === "style" ||
            name === "ref" ||
            name === "className") {
            return;
        }
        if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
            const eventName = name.substring(2);
            const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
            if (!isCoveredByReact(eventNameLc)) {
                syncEvent(node, eventNameLc, newProps[name]);
            }
        }
        else {
            node[name] = newProps[name];
        }
    });
};
const getClassName = (classList, newProps, oldProps) => {
    const newClassProp = newProps.className || newProps.class;
    const oldClassProp = oldProps.className || oldProps.class;
    // map the classes to Maps for performance
    const currentClasses = arrayToMap(classList);
    // tslint:disable-next-line: strict-boolean-conditions
    const incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(" ") : []);
    // tslint:disable-next-line: strict-boolean-conditions
    const oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(" ") : []);
    const finalClassNames = [];
    // loop through each of the current classes on the component
    // to see if it should be a part of the classNames added
    currentClasses.forEach((currentClass) => {
        if (incomingPropClasses.has(currentClass)) {
            // add it as its already included in classnames coming in from newProps
            finalClassNames.push(currentClass);
            incomingPropClasses.delete(currentClass);
        }
        else if (!oldPropClasses.has(currentClass)) {
            // add it as it has NOT been removed by user
            finalClassNames.push(currentClass);
        }
    });
    incomingPropClasses.forEach((s) => finalClassNames.push(s));
    return finalClassNames.join(" ");
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
const isCoveredByReact = (eventNameSuffix, doc = document) => {
    const eventName = "on" + eventNameSuffix;
    let isSupported = eventName in doc;
    if (!isSupported) {
        const element = doc.createElement("div");
        element.setAttribute(eventName, "return;");
        isSupported = typeof element[eventName] === "function";
    }
    return isSupported;
};
const syncEvent = (node, eventName, newEventHandler) => {
    const eventStore = node.__events || (node.__events = {});
    const oldEventHandler = eventStore[eventName];
    // Remove old listener so they don't double up.
    if (oldEventHandler) {
        node.removeEventListener(eventName, oldEventHandler);
    }
    // Bind new listener.
    node.addEventListener(eventName, (eventStore[eventName] = function handler(e) {
        newEventHandler.call(this, e);
    }));
};
const arrayToMap = (arr) => {
    const map = new Map();
    arr.forEach((s) => map.set(s, s));
    return map;
};

const dashToPascalCase = (str) => str
    .toLowerCase()
    .split("-")
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join("");
const createForwardRef = (ReactComponent, displayName) => {
    const forwardRef = (props, ref) => {
        return React.createElement(ReactComponent, Object.assign({}, props, { forwardedRef: ref }));
    };
    forwardRef.displayName = displayName;
    return React.forwardRef(forwardRef);
};

const createReactComponent = (tagName) => {
    const displayName = dashToPascalCase(tagName);
    const ReactComponent = class extends React.Component {
        constructor(props) {
            super(props);
        }
        componentDidMount() {
            this.componentDidUpdate(this.props);
        }
        componentDidUpdate(prevProps) {
            const node = ReactDom.findDOMNode(this);
            attachEventProps(node, this.props, prevProps);
        }
        render() {
            const _a = this.props, { children, forwardedRef, style, className, ref } = _a, cProps = tslib.__rest(_a, ["children", "forwardedRef", "style", "className", "ref"]);
            const propsToPass = Object.keys(cProps).reduce((acc, name) => {
                if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
                    const eventName = name.substring(2).toLowerCase();
                    if (isCoveredByReact(eventName)) {
                        acc[name] = cProps[name];
                    }
                }
                return acc;
            }, {});
            const newProps = Object.assign(Object.assign({}, propsToPass), { ref: forwardedRef, style });
            return React.createElement(tagName, newProps, children);
        }
        static get displayName() {
            return displayName;
        }
    };
    return createForwardRef(ReactComponent, displayName);
};

const MyComponent = /*@\__PURE_\_*/ createReactComponent("my-component");
loader.defineCustomElements(window);

exports.MyComponent = MyComponent;
//# sourceMappingURL=index.js.map
