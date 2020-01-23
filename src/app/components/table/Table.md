Tables include default styles for tables and data sets.

```jsx
import { Table, Column } from "./Table";
import table_data from "fixtures/table_data";
<div className="column col-12">
  <Table
    data={table_data}
    height={525}
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
  </Table>
</div>
```

See other [table options](https://picturepan2.github.io/spectre/elements/tables.html)
