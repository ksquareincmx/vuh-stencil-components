# k-checkbox

`k-checkbox` is Vuh's web component for checkboxes.

It receives text as its child, and if no child is given, the checkbox's accompanying text is set to "Default".

A `value` should be given to the checkbox, so the checkbox's event has an `event.target.value`.

On Vue, it must use `@input` to work.

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type      | Default     |
| ---------- | ---------- | ----------- | --------- | ----------- |
| `checked`  | `checked`  |             | `boolean` | `false`     |
| `disabled` | `disabled` |             | `boolean` | `false`     |
| `value`    | `value`    |             | `string`  | `undefined` |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `valueChange` |             | `CustomEvent<any>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
