# k-dropdown-item

**_`k-dropdown-item` is a part of the `k-dropdown` family of components._**

`k-dropdown-item` is Vuh's web component for a dropdown's item/option.

It must exclusively be used as a children to `k-dropdown`.

On React, it must use the `onInput` event to work.
On Vue, it must use `@input` to work.

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type      | Default |
| ---------- | ---------- | ----------- | --------- | ------- |
| `checked`  | `checked`  |             | `boolean` | `false` |
| `disabled` | `disabled` |             | `boolean` | `false` |
| `name`     | `name`     |             | `string`  | `''`    |
| `value`    | `value`    |             | `string`  | `''`    |


## Events

| Event           | Description | Type                                                  |
| --------------- | ----------- | ----------------------------------------------------- |
| `selectChanged` |             | `CustomEvent<any>`                                    |
| `valueChanged`  |             | `CustomEvent<{ id: any; value: any; text: string; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
