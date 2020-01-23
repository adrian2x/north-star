import * as React from "react";
import { PureComponent } from "react";
import { Column as VColumn, SortDirection } from "react-virtualized";
import defaultCellRenderer from 'react-virtualized/dist/es/Table/defaultCellRenderer';
import defaultCellDataGetter from 'react-virtualized/dist/es/Table/defaultCellDataGetter';
import clsx from "clsx";



const SortIndicator = ({sortDirection}) => {
  let icon = "";
  const classNames = clsx("ReactVirtualized__Table__sortableHeaderIcon", {
    "ReactVirtualized__Table__sortableHeaderIcon--ASC":
      sortDirection === SortDirection.ASC,
    "ReactVirtualized__Table__sortableHeaderIcon--DESC":
      sortDirection === SortDirection.DESC,
  });
  if (sortDirection == SortDirection.DESC) {
    icon = "⬇";
  } else if (sortDirection == SortDirection.ASC) {
    icon = "⬆";
  }
  console.log(sortDirection, SortDirection.DESC, icon);
  return <span className={classNames}>{icon}</span>;
};

const _cellHeaderRenderer = ({
  dataKey,
  columnData,
  label,
  disableSort,
  sortBy,
  sortDirection,
}) => {
  const showSortIndicator = sortBy === dataKey;
  const children = [
    <span
      className="ReactVirtualized__Table__headerTruncatedText"
      key="label"
      title={typeof label === "string" ? label : null}
    >
      {label}
    </span>,
  ];

  if (showSortIndicator) {
    children.push(
      <SortIndicator key="SortIndicator" sortDirection={sortDirection} />,
    );
  }

  return children;
};

export interface ColumnProps {
  dataKey: string;
  width: number;
}

export class Column extends PureComponent<ColumnProps, {}> {
  static defaultProps = {
    cellDataGetter: defaultCellDataGetter,
    cellRenderer: defaultCellDataGetter,
    defaultSortDirection: SortDirection.ASC,
    headerRenderer: _cellHeaderRenderer,
    flexShrink: 1,
    flexGrow: 0,
    style: {},
  };

  render() {
    return (
      <VColumn
        {...this.props}
      />
    );
  }
}
