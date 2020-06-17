import { __rest } from "tslib";
import React from "react";
import ReactDom from "react-dom";
import { attachEventProps, createForwardRef, dashToPascalCase, isCoveredByReact, } from "./utils";
export const createReactComponent = (tagName) => {
    const displayName = dashToPascalCase(tagName);
    const ReactComponent = class extends React.Component {
        constructor(props) {
            super(props);
        }
        componentDidMount() {
            const node = ReactDom.findDOMNode(this);
            attachEventProps(node, this.props, this.props);
        }
        componentDidUpdate(prevProps) {
            if (prevProps !== this.props) {
                const node = ReactDom.findDOMNode(this);
                attachEventProps(node, this.props, prevProps);
            }
        }
        render() {
            const _a = this.props, { children, forwardedRef, style, className, ref } = _a, cProps = __rest(_a, ["children", "forwardedRef", "style", "className", "ref"]);
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
//# sourceMappingURL=createComponent.js.map