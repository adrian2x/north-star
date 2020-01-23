Tables include default styles for tables and data sets.

```jsx
<div className="column col-12">
  <Table
    data={table_data}
    height={525}
    headerHeight={40}
    rowHeight={52}>
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
