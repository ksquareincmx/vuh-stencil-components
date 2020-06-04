import { JSX } from "k-ui-kit";
import { defineCustomElements } from "k-ui-kit/loader";

/** We'll talk about this one in a minute **/
import { createReactComponent } from "./createComponent";

export const MyComponent = /*@\__PURE_\_*/ createReactComponent<
  JSX.MyComponent,
  HTMLMyComponentElement
>("my-component");

defineCustomElements(window);
