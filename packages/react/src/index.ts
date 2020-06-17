import { JSX } from "k-ui-kit";
import { defineCustomElements } from "k-ui-kit/loader";
import { createReactComponent } from "./createComponent";

export const MyComponent = /*@\__PURE_\_*/ createReactComponent<
  JSX.MyComponent,
  HTMLMyComponentElement
>("my-component");

export const KButton = /*@\__PURE_\_*/ createReactComponent<
  JSX.KButton,
  HTMLKButtonElement
>("k-button");

export const KSpinner = /*@\__PURE_\_*/ createReactComponent<
  JSX.KSpinner,
  HTMLKSpinnerElement
>("k-spinner");

defineCustomElements(window);
