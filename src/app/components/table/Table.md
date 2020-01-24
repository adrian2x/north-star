A static table with default styles.

```jsx
import table_data from "fixtures/table_data";
<div className="column col-12">
  <Table
    rows={table_data.rows}
    columns={table_data.columns}>
  </Table>
</div>
```

### Striped tables

Use the `striped` prop to add zebra striped styles. For hoverable table rows, you can use the `hoverable` class to enable hover style. Add the `scrollable` prop to enable horizontal scrolling.

```jsx
import table_data from "fixtures/table_data";
<div className="column col-12">
  <Table
    rows={table_data.rows}
    columns={table_data.columns}
    striped
    hoverable>
  </Table>
</div>
```

[See more table examples](https://picturepan2.github.io/spectre/elements/tables.html)
