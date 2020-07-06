![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Vuh Design System

Components Library to be implemented in any JS Framework/Library.

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
