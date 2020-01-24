`UITable` is a wrapper of [react-virtualized](https://github.com/bvaughn/react-virtualized) tables that renders fixed headers and windowed rows for improved performance with large datasets.

It uses [AutoSizer](https://github.com/bvaughn/react-virtualized/blob/master/docs/AutoSizer.md) by default, but a fixed `width` and `height` can be provided as well. When relying on `AutoSizer`, it's important to set the parent element's dimensions or the table content will overflow. See [working with AutoSizer](https://github.com/bvaughn/react-virtualized/blob/master/docs/AutoSizer.md#examples).

```jsx
import { UITable, Column } from "./UITable";
import table_data from "fixtures/table_data";
<div className="column col-12" style={{height: 300}}>
  <UITable
    data={table_data.rows}
    height={259}
    headerHeight={43}
    rowHeight={53}>
    <Column
      dataKey="name"
      label="Name"
      width={240} />
    <Column
      dataKey="genre"
      label="Genre"
      width={240} />
    <Column
      dataKey="released"
      label="Release Date"
      width={240} />
  </UITable>
</div>
```

[See react-virtualized Table docs](https://github.com/bvaughn/react-virtualized/blob/master/docs/Table.md)
