# k-input



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description | Type                         | Default     |
| ----------------- | ------------------ | ----------- | ---------------------------- | ----------- |
| `disabled`        | `disabled`         |             | `boolean`                    | `false`     |
| `helperText`      | `helper-text`      |             | `string`                     | `''`        |
| `label`           | `label`            |             | `string`                     | `'Default'` |
| `maxLength`       | `max-length`       |             | `number`                     | `0`         |
| `name`            | `name`             |             | `string`                     | `''`        |
| `type`            | `type`             |             | `string`                     | `'text'`    |
| `validationState` | `validation-state` |             | `"" \| "error" \| "success"` | `''`        |
| `value`           | `value`            |             | `string`                     | `''`        |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `valueChange` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [k-icon](../k-icon)

### Graph
```mermaid
graph TD;
  k-input --> k-icon
  style k-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*