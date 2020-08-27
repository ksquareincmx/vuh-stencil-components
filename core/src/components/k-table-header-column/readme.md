# k-table-header-column

**_`k-table-header-column` is a part of the `k-table` family of components._**

`k-table-header-column` is Vuh's web component for a table header's column.

It should only be used as a child to an instance of `k-table-row` whose type is `header`.

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                                                  | Default |
| ---------- | ---------- | ----------- | --------------------------------------------------------------------- | ------- |
| `active`   | `active`   |             | `boolean`                                                             | `false` |
| `default`  | `default`  |             | `boolean`                                                             | `false` |
| `disabled` | `disabled` |             | `boolean`                                                             | `false` |
| `size`     | `size`     |             | `"1" \| "10" \| "2" \| "3" \| "4" \| "5" \| "6" \| "7" \| "8" \| "9"` | `'1'`   |
| `sortable` | `sortable` |             | `boolean`                                                             | `true`  |


## Events

| Event           | Description | Type                                                     |
| --------------- | ----------- | -------------------------------------------------------- |
| `activeChanged` |             | `CustomEvent<{ id: String; active: any; sortBy: any; }>` |
| `sizeChanged`   |             | `CustomEvent<{ sizeHasChanged: boolean; }>`              |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
