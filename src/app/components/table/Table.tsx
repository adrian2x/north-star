import * as React from "react";
import map from "lodash/map";
import clsx from "clsx";

export interface TableProps {
  columns: any[];
  rows: any[];
  striped?: boolean;
  scrollable?: boolean;
  hoverable?: boolean;
}

export const Table: React.FC<TableProps> = ({
  columns,
  rows,
  striped,
  scrollable,
  hoverable,
}: TableProps) => {
  if (!columns.length || !rows.length) {
    return null;
  }

  const classList = clsx(
    "table",
    striped && "table-striped",
    scrollable && "table-scroll",
    hoverable && "table-hover",
  );

  return (
    <table className={classList}>
      <thead>
        <tr>
          {columns.map(col => (
            <th key={col.dataKey} className={col.className}>
              {col.name || col.dataKey}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => {
          const rowKey = row.key ? row.key + i : i;
          return (
            <tr key={rowKey}>
              {columns.map((col, j) => (
                <td key={rowKey + j}>{row[col.dataKey]}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
