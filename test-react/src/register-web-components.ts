/* eslint-disable */
import {
  defineCustomElements,
  JSX as LocalJSX,
} from "@the-ksquare-group/vuh-stencil-components/loader";
import "@the-ksquare-group/vuh-stencil-components/www/build/vuh-stencil.css";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type StencilProps<T> = {
  [P in keyof T]?: Omit<T[P], "ref"> | HTMLAttributes<T>;
};

type ReactProps<T> = {
  [P in keyof T]?: DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]>;
};

type StencilToReact<
  T = LocalJSX.IntrinsicElements,
  U = HTMLElementTagNameMap
> = StencilProps<T> & ReactProps<U>;

declare global {
  export namespace JSX {
    interface IntrinsicElements extends StencilToReact {}
  }
}
defineCustomElements(window);
