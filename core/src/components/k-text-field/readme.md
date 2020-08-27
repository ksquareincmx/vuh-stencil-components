# k-text-field

`k-text-field` is Vuh's web component for a text field.

It receives no children, as its content is determined by its props.

On React, it must use the `onInput` event to work.

<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description | Type                         | Default     |
| ----------------- | ------------------ | ----------- | ---------------------------- | ----------- |
| `disabled`        | `disabled`         |             | `boolean`                    | `false`     |
| `helperText`      | `helper-text`      |             | `string`                     | `''`        |
| `label`           | `label`            |             | `string`                     | `'Default'` |
| `maxLength`       | `max-length`       |             | `number`                     | `0`         |
| `minLength`       | `min-length`       |             | `number`                     | `0`         |
| `name`            | `name`             |             | `string`                     | `''`        |
| `validationState` | `validation-state` |             | `"" \| "error" \| "success"` | `''`        |
| `value`           | `value`            |             | `string`                     | `''`        |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `valueChange` |             | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
