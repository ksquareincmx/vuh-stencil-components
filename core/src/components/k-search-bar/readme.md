# k-search-bar

`k-search-bar` is Vuh's web component for a search bar.

It receives no children, as its contents are determined by props.

On React, it must use the `onInput` event to work.

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description | Type                    | Default    |
| ------------- | ------------- | ----------- | ----------------------- | ---------- |
| `disabled`    | `disabled`    |             | `boolean`               | `false`    |
| `maxLength`   | `max-length`  |             | `number`                | `0`        |
| `minLength`   | `min-length`  |             | `number`                | `0`        |
| `name`        | `name`        |             | `string`                | `''`       |
| `placeholder` | `placeholder` |             | `string`                | `'Search'` |
| `type`        | `type`        |             | `"outlined" \| "solid"` | `'solid'`  |
| `value`       | `value`       |             | `string`                | `''`       |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `valueChange` |             | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
