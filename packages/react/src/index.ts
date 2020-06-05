import { JSX } from "k-ui-kit";
import { defineCustomElements } from "k-ui-kit/loader";
import { createReactComponent } from "./createComponent";

export const MyComponent = /*@\__PURE_\_*/ createReactComponent<
  JSX.MyComponent,
  HTMLMyComponentElement
>("my-component");

defineCustomElements(window);
