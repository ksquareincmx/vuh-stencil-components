# k-radio-button

**_`k-radio-button` is a part of the `k-radio-button` family of components._**

`k-radio-button` is Vuh's web component for a radio button.

It can receive text as its child to be displayed at the side of the radio button. If no child is given, the text is set to be "Default."

A `value` should be given to the radio button, so the radio button's event has an `event.target.value`.

On Vue, it must use `@input` to work.

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type      | Default        |
| ---------- | ---------- | ----------- | --------- | -------------- |
| `checked`  | `checked`  |             | `boolean` | `false`        |
| `disabled` | `disabled` |             | `boolean` | `false`        |
| `name`     | `name`     |             | `string`  | `this.inputId` |
| `value`    | `value`    |             | `string`  | `this.inputId` |


## Events

| Event          | Description | Type                                       |
| -------------- | ----------- | ------------------------------------------ |
| `valueChanged` |             | `CustomEvent<{ value: any; id: String; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
