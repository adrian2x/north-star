A static table

```jsx
import { Table } from "./Table";
import table_data from "fixtures/table_data";
<div className="column col-12">
  <Table
    rows={table_data.rows}
    columns={table_data.columns}>
  </Table>
</div>
```

[See react-virtualized Table docs](https://github.com/bvaughn/react-virtualized/blob/master/docs/Table.md)
