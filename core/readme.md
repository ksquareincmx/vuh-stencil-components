![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Vuh Design System

**Vuh** is a project created with the purpose of having a common design system for our company, allowing us to do rapid prototypes. It is comprised of **web components that can be used on any of the major JS front-end frameworks**. This is possible thanks to Stencil JS, a compiler that generates Web Components (more specifically, Custom Elements) and builds high performance web apps.

Stencil combines the best concepts of the most popular frameworks into a simple build-time tool:

- Virtual DOM
- Async Rendering
- Reactive Data Binding
- Typescript (yes, configured by default!)
- JSX

For the small minority of browsers that do not support modern browser features and APIs, **_Stencil will automatically polyfill them on-demand_**.

It also has a **_tiny API_** which doesn't need to be learned and re-learned, but rather heavily relies on web standards.

So, if you've worked with React or any other front-end library, you'll feel very comfortable!

## Setting Up the Design System in React

1. Create a new file on your React project's root folder. For this example, we'll call the new file **`register-web-components.ts`**, but feel free to name it however you like.

```js
import {  defineCustomElements,  JSX as LocalJSX, } from '@the-ksquare-group/vuh-stencil-components/loader';
import '@the-ksquare-group/vuh-stencil-components/www/build/vuh-stencil.css';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

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
```

2. On your React project's index file, import the file you just created.

```js
import './register-web-components';
```

## Setting Up the Design System in Vue

1. Add the following to your Vue project's **`main.js`** file:

```js
import {
  applyPolyfills,
  defineCustomElements
} from '@the-ksquare-group/vuh-stencil-components/loader';
import '@the-ksquare-group/vuh-stencil-components/www/build/vuh-stencil.css';
// if you want theming options, include your css path
import './custom-global.css';
applyPolyfills().then(() => {
  defineCustomElements();
});
Vue.config.ignoredElements = [/^k-/];
```

## Theming CSS Variables

```css
:root {
  --vuh-primary-color: #1b8df2;
  --vuh-primary-800: #0672d1;
  --vuh-primary-700: #0b7de0;
  --vuh-primary-600: #1986e6;
  --vuh-primary-500: #1b8df2;
  --vuh-primary-400: #339bf5;
  --vuh-primary-300: #45a3f5;
  --vuh-primary-200: #56abf5;
  --vuh-primary-100: #7fbef5;

  --vuh-primary-300-rgb: 69, 163, 245;
  --vuh-primary-100-rgb: 127, 190, 245;
}
```

## CSS Utilities

### Text Alignment

| Class           | Style Rule          | Description                                                                                                                                                         |
| --------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| .k-text-left    | text-align: left    | The inline contents are aligned to the left edge of the line box.                                                                                                   |
| .k-text-right   | text-align: right   | The inline contents are aligned to the right edge of the line box.                                                                                                  |
| .k-text-start   | text-align: start   | The same as text-left if direction is left-to-right and text-right if direction is right-to-left.                                                                   |
| .k-text-end     | text-align: end     | The same as text-right if direction is left-to-right and text-left if direction is right-to-left.                                                                   |
| .k-text-center  | text-align: center  | The inline contents are centered within the line box.                                                                                                               |
| .k-text-justify | text-align: justify | The inline contents are justified. Text should be spaced to line up its left and right edges to the left and right edges of the line box, except for the last line. |
| .k-text-wrap    | white-space: normal | Sequences of whitespace are collapsed. Newline characters in the source are handled as other whitespace. Breaks lines as necessary to fill line boxes.              |
| .k-text-nowrap  | white-space: nowrap | Collapses whitespace as for normal, but suppresses line breaks (text wrapping) within text.                                                                         |

### Text Transformation

| Class              | Style Rule                 | Description                                                        |
| ------------------ | -------------------------- | ------------------------------------------------------------------ |
| .k-text-uppercase  | text-transform: uppercase  | Forces all characters to be converted to uppercase.                |
| .k-text-lowercase  | text-transform: lowercase  | Forces all characters to be converted to lowercase.                |
| .k-text-capitalize | text-transform: capitalize | Forces the first letter of each word to be converted to uppercase. |

### Element Padding

| Class                 | Style Rule           | Description                            |
| --------------------- | -------------------- | -------------------------------------- |
| .k-padding            | padding: 16px        | Applies padding to all sides.          |
| .k-padding-top        | padding-top: 16px    | Applies padding to the top.            |
| .k-padding-left       | padding-left: 16px   | Applies padding to the left.           |
| .k-padding-right      | padding-right: 16px  | Applies padding to the right.          |
| .k-padding-bottom     | padding-bottom: 16px | Applies padding to the bottom.         |
| .k-padding-vertical   | padding: 16px 0      | Applies padding to the top and bottom. |
| .k-padding-horizontal | padding: 0 16px      | Applies padding to the left and right. |
| .k-no-padding         | padding: 0           | Applies no padding to all sides.       |

### Element Margin

| Class                | Style Rule          | Description                           |
| -------------------- | ------------------- | ------------------------------------- |
| .k-margin            | margin: 16px        | Applies margin to all sides.          |
| .k-margin-top        | margin-top: 16px    | Applies margin to the top.            |
| .k-margin-left       | margin-left: 16px   | Applies margin to the left.           |
| .k-margin-right      | margin-right: 16px  | Applies margin to the right.          |
| .k-margin-bottom     | margin-bottom: 16px | Applies margin to the bottom.         |
| .k-margin-vertical   | margin: 16px 0      | Applies margin to the top and bottom. |
| .k-margin-horizontal | margin: 0 16px      | Applies margin to the left and right. |
| .k-no-margin         | margin: 0           | Applies no margin to all sides.       |

### Flex Container Properties

| Class                      | Style Rule                     | Description                                                                 |
| -------------------------- | ------------------------------ | --------------------------------------------------------------------------- |
| .k-justify-content-start   | justify-content: flex-start    | Items are packed toward the start on the main axis.                         |
| .k-justify-content-end     | justify-content: flex-end      | Items are packed toward the end on the main axis.                           |
| .k-justify-content-center  | justify-content: center        | Items are centered along the main axis.                                     |
| .k-justify-content-around  | justify-content: space-around  | Items are evenly distributed on the main axis with equal space around them. |
| .k-justify-content-between | justify-content: space-between | Items are evenly distributed on the main axis.                              |
| .k-justify-content-evenly  | justify-content: space-evenly  | Items are distributed so that the spacing between any two items is equal.   |
| .k-align-items-start       | align-items: flex-start        | Items are packed toward the start on the cross axis.                        |
| .k-align-items-end         | align-items: flex-end          | Items are packed toward the end on the cross axis.                          |
| .k-align-items-center      | align-items: center            | Items are centered along the cross axis.                                    |
| .k-align-items-baseline    | align-items: baseline          | Items are aligned so that their baselines align.                            |
| .k-align-items-stretch     | align-items: stretch           | Items are stretched to fill the container.                                  |
| .k-nowrap                  | flex-wrap: nowrap              | Items will all be on one line.                                              |
| .k-wrap                    | flex-wrap: wrap                | Items will wrap onto multiple lines, from top to bottom.                    |
| .k-wrap-reverse            | flex-wrap: wrap-reverse        | Items will wrap onto multiple lines, from bottom to top.                    |

### Flex Item Properties

| Class                  | Style Rule             | Description                                                            |
| ---------------------- | ---------------------- | ---------------------------------------------------------------------- |
| .k-align-self-start    | align-self: flex-start | Item is packed toward the start on the cross axis.                     |
| .k-align-self-end      | align-self: flex-end   | Item is packed toward the end on the cross axis.                       |
| .k-align-self-center   | align-self: center     | Item is centered along the cross axis.                                 |
| .k-align-self-baseline | align-self: baseline   | Item is aligned so that its baseline aligns with other item baselines. |
| .k-align-self-stretch  | align-self: stretch    | Item is stretched to fill the container.                               |
| .k-align-self-auto     | align-self: auto       | Item is positioned according to the parent's align-items value.        |

## Components

_In alphabetical order_

### 1. K-Avatar

`k-avatar` is Vuh's web component for avatars/profile pictures. It optionally receives a prop called `size` which can either be `small`, `medium` or `large`. If no `size` is specified, the component's size will be set to `small` by default.

It is suggested to use Vuh's `k-img` component as its child.

### 2. K-Banner Family

#### 2.1. K-Banner

`k-banner` is Vuh's web component for banners, used when a website needs to display one on an action's success or failure. As such, it receives a prop named `type` which can either be `success` or `error`. If no `type` is specified, it will be set as `success` by default.

It is strongly encouraged to use Vuh's `k-banner-text` component as its child to keep the design's consistency.

#### 2.2. K-Banner-Text

`k-banner-text`is Vuh's web component for text on banners.

It should be exclusively used as a child to `k-banner`, lest it may not work as described here.

### 3. K-Breadcrumbs Family

#### 3.1. K-Breadcrumbs

`k-breadcrumbs` is Vuh's web component for a breadcrumbs container.

It must contain instances of `k-breadcrumbs-item` for it to work properly.

#### 3.2. K-Breadcrumbs-Item

`k-breadcrumbs-item` is Vuh's web component for breadcrumbs items.

It must be used exclusively as a child of `k-breadcrumbs` for it to work properly.

### 4. K-Button

`k-button` is Vuh's web component for buttons.

It must receive text as its child for the button not to be empty.

### 5. K-Card

`k-card` is Vuh's web component for cards.

It acts a general purpose container which can receive any elements it may require as its children.

### 6. K-Carousel Family

#### 6.1. K-Carousel

`k-carousel` is Vuh's web component for carousels.

It must contain instances of `k-carousel-item` for it to work properly.

#### 6.2. K-Carousel-Item

`k-carousel-item` is Vuh's web component for carousel items.

Although it can receive any element as its child, it is strongly recommended to use `k-img` to ensure optimal results.

### 7. K-Checkbox

`k-checkbox` is Vuh's web component for checkboxes.

It receives text as its child, and if no child is given, the checkbox's accompanying text is set to "Default".

A `value` should be given to the checkbox, so the checkbox's event has an `event.target.value`.

On Vue, it must use `@input` to work.

### 8. K-Collapse-Menu Family

#### 8.1. K-Collapse-Menu

`k-collapse-menu` is Vuh's web component for collapsible menus. It acts as the component family's main container.

It must receive two elements for it to work properly: `k-collapse-parent` and `k-collapse-list`.

#### 8.2. K-Collapse-Parent

`k-collapse-parent` acts as the element upon which a user's hover shows the otherwise hidden `k-collapse-list`.

It can receive any element as its own child.

#### 8.3. K-Collapse-List

`k-collapse-list` is the element that is displayed when a user hovers over `k-collapse-parent`.

It must receive instances of `k-collapse-item` for it to work as intended.

#### 8.4. K-Collapse-Item

`k-collapse-item` is the element that is displayed inside of `k-collapse-list`.

As such, it must be used exclusively as a child of `k-collapse-list`.

### 9. K-Content

`k-content` is Vuh's web component for a generic container.

It can receive any elements as its children.

### 10. K-Dialog Family

#### 10.1. K-Dialog

`k-dialog` is Vuh's web component for dialogs. It acts as the main container for its family of components.

It must receive two components as its children for it to work properly: `k-dialog-content` and `k-dialog-actions`.

#### 10.2. K-Dialog-Actions

`k-dialog-actions` is Vuh's web component for actions on a dialog.

It is recommended to use instances of `k-button` as its children.

#### 10.3. K-Dialog-Body

`k-dialog-body` is Vuh's web component for the text to be displayed inside of `k-dialog-content`.

It must be exclusively used as a child to `k-dialog-content`.

#### 10.4. K-Dialog-Content

`k-dialog-content` is Vuh's web component for the content inside of a dialog.

It must exclusively be used as a child to `k-dialog` and its children must be `k-dialog-header` and `k-dialog-body`.

#### 10.5. K-Dialog-Header

`k-dialog-header` is Vuh's web component for the header/title inside of a dialog's content.

It must exclusively be used as a child to `k-content`.

### 11. K-Divider

`k-divider` is Vuh's web component for an horizontal divider.

It receives no children.

### 12. K-Drawer

`k-drawer` is Vuh's web component for a drawer/sidebar.

It can receive whichever element it might need to display, as the component works as a container for the sidebar/drawer's contents.

### 13. K-Dropdown Family

#### 13.1. K-Dropdown

`k-dropdown` is Vuh's web component for a dropdown.

It receives instances of `k-dropdown-item` as its children, which are then displayed when the component is clicked.

#### 13.2. K-Dropdown-Item

`k-dropdown-item` is Vuh's web component for a dropdown's item/option.

It must exclusively be used as a children to `k-dropdown`.

On Vue, it must use `@input` to work.

### 14. K-Elevation

`k-elevation` is Vuh's web component for a container with an elevation/shadow.

It can receive any elements it might need as its children.

### 15. K-Grid

#### 15.1. K-Grid

`k-grid` is Vuh's web component for the main container of a grid system.

It must exclusively receive instances of `k-row` for it to work properly.

#### 15.2. K-Row

`k-row` is Vuh's web component for a row in a grid system.

It must exclusively be used as a child to `k-grid` and its children can only be instances of `k-column`.

#### 15.3. K-Column

`k-column` is Vuh's web component for a column in a grid system.

It must exclusively be used as children to `k-row`.

### 16. K-Icon

`k-icon` is Vuh's web component for icons.

It should receive no children, as its content is determined by the `name` prop.

### 17. K-Img

`k-img` is Vuh's web component for an image element.

It should receive no children, as its content is determined by a prop.

### 18. K-Input

`k-input` is Vuh's web component for an input field.

It should receive no children, as its appearence and contents are determined by props.

On React, it must use the `onInput` event to work.
On Vue, it must use `@input` to work.

### 19. K-Label

`k-label` is Vuh's web component for a label tag/element.

It receives text as its child.

### 20. K-List-Group Family

#### 20.1. K-List-Group

`k-list-group` is Vuh's web component for a container of list items.

It should exclusively receive instances of `k-list-item` as its children.

#### 20.2. K-List-Item

`k-list-item` is Vuh's web component for a list's item.

It should exclusively be used as a child to `k-list-group`.

### 21. K-Menu Family

#### 21.1. K-Menu

`k-menu` is Vuh's web component for a menu.

It can receive `k-menu-content` and `k-menu-nav` as its children.

#### 21.2. K-Menu-Content

`k-menu-content` is Vuh's web component for the content inside a menu's toolbar.

It can receive whichever element it might need to work as needed.

#### 21.3. K-Menu-Nav

`k-menu-nav` is Vuh's web component for a menu's selectable tabs.

It is recommended to use `k-tab` as its child, but not necessarily.

### 22. K-Modal

`k-modal` is Vuh's web component for a modal.

It can receive any element it might need to populate its content.

### 23. K-Notification Family

#### 23.1. K-Notification

`k-notification` is Vuh's web component for notifications' main container. It displays all notifications upon being hovered upon.

It must receive `k-notification-group` as its child.

#### 23.2. K-Notification-Group

`k-notification-group` is Vuh's web component for a group of notification items, which is displayed upon the hovering of `k-notification`.

It must exclusively receive instances of `k-notification-item` as its children.

#### 23.3. K-Notification-Item

`k-notification-item` is Vuh's web component for a notification item.

It must exclusively be used as a child to `k-notification-group`.

### 24. K-Paginator

`k-paginator` is Vuh's web component for a paginator.

It receives no children, as its content is determined by props.

### 25. K-Progress-Bar

`k-progress-bar` is Vuh's web component for a progress bar.

It receives no children, as its content is determined by props.

### 26. K-Radio-Button

#### 26.1 K-Radio-Button

`k-radio-button` is Vuh's web component for a radio button.

It can receive text as its child to be displayed at the side of the radio button. If no child is given, the text is set to be "Default."

A `value` should be given to the radio button, so the radio button's event has an `event.target.value`.

On Vue, it must use `@input` to work.

#### 26.1 K-Radio-Button-Group

`k-radio-button-group` is an optional container for instances of `k-radio-button`, which allows for only one `k-radio-button` instance to be selected at a time.

As its name implies, it should only receive instances of `k-radio-button` as its children.

### 27. K-Search-Bar

`k-search-bar` is Vuh's web component for a search bar.

It receives no children, as its contents are determined by props.

On React, it must use the `onInput` event to work.

### 28. K-Snackbar

`k-snackbar` is Vuh's web component for a snackbar.

It can receive an instance of a `k-button` as a child, so the button can be used to fire an action upon being clicked.

### 29. K-Spinner

`k-spinner` is Vuh's web component for a spinner.

It receives no children.

### 30. K-Stepper Family

#### 30.1. K-Stepper

`k-stepper` is Vuh's web component for a stepper.

It must receive `k-stepper-header` and `k-stepper-content` as its children.

#### 30.2. K-Stepper-Content

`k-stepper-content` is Vuh's web component for a stepper's content.

It should only receive an instance of `k-stepper-content-item` as it child.

#### 30.3. K-Stepper-Content-Item

`k-stepper-content-item` is Vuh's web component for a stepper content's item.

It should only be used as a child to `k-stepper-content`.

#### 30.4. K-Stepper-Header

`k-stepper-header` is Vuh's web component for a stepper's header.

It should only receive an instance of `k-stepper-header-item` as its child.

#### 30.5. K-Stepper-Header-Item

`k-stepper-header-item` is Vuh's web component for a stepper header's item.

It should only be used as a child to `k-stepper-header`.

### 31. K-Switch

`k-switch` is Vuh's web component for a switch.

It receives no children, as its appearence is determined by props.

### 32. K-Tab Family

#### 32.1. K-Tab

`k-tab` is Vuh's web component for a container of tabs.

It must only receive instances of `k-tab-item` as its children.

#### 32.2. K-Tab-Item

`k-tab-item` is Vuh's web component for a tab item.

It must only be used as a child of `k-tab`.

### 33. K-Table Family

#### 33.1. K-Table

`k-table` is Vuh's web component for a table's container.

It must only receive instances of `k-table-row` as its children.

#### 33.2. K-Table-Column

`k-table-column` is Vuh's web component for a table's regular column.

It should only be used as a child to instances `k-table-row` whose type are not `header`.

#### 33.3. K-Table-Header-Column

`k-table-header-column` is Vuh's web component for a table header's column.

It should only be used as a child to an instance of `k-table-row` whose type is `header`.

#### 33.4. K-Table-Row

`k-table-row` is Vuh's web component for a table's row.

It should only be used as a child to `k-table` and can receive instances of `k-table-column` or `k-table-header-column` depending on its `type` prop.

### 34. K-Tag

`k-tag` is Vuh's web component for a tag.

It can either receive plain text or an instance of `k-label` as its child; the second option is encouraged to keep the design's consistency.

### 35. K-Text-Field

`k-text-field` is Vuh's web component for a text field.

It receives no children, as its content is determined by its props.

On React, it must use the `onInput` event to work.

### 36. K-Tooltip

`k-tooltip` is Vuh's web component for a tooltip. It wraps the element that, upon being hovered upon, shows the tooltip.

It receives an element as its children, and its content is determined by a prop.

### 37. K-Typography

`k-typography` is Vuh's web component for many different kinds of texts. Its look is determined by prop.

It can either receive plain text as its child, and have its child's appearence determined by the component's `variant` and `color` props, or receive one of the many text html tags as its children, rendering the use of the `variant` prop unnecessary.
