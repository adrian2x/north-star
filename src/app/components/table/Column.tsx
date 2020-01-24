import * as React from "react";
import { Column as VColumn, SortDirection } from "react-virtualized";
import clsx from "clsx";

export type CellDataGetterParams = {
  columnData?: any;
  dataKey: string;
  rowData: any;
};

export type CellDataGetter = ({
  dataKey,
  rowData,
}: CellDataGetterParams) => React.ReactNode;

export type CellRendererParams = {
  cellData?: any;
  columnData?: any;
  dataKey: string;
  rowData: any;
  rowIndex: number;
};

export type CellRendererFunc = ({
  cellData,
}: CellRendererParams) => React.ReactNode;

export type HeaderRendererParams = {
  columnData?: any;
  dataKey: string;
  disableSort?: boolean;
  label?: any;
  sortBy?: string;
  sortDirection?: string;
};

export type HeaderRenderFunc = ({
  dataKey,
  columnData,
  disableSort,
  label,
  sortBy,
  sortDirection,
}: HeaderRendererParams) => React.ReactNode;

export interface SortIndicatorProps {
  sortDirection: SortDirection;
}

const SortIndicator = ({ sortDirection }: SortIndicatorProps): JSX.Element => {
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
  return <span className={classNames}>{icon}</span>;
};

const _cellDataGetter = ({ dataKey, rowData }: CellDataGetterParams) => {
  return typeof rowData.get === "function"
    ? rowData.get(dataKey)
    : rowData[dataKey];
};

const _cellRenderer = ({ cellData }: CellRendererParams) =>
  cellData == null ? "" : String(cellData);

const _cellHeaderRenderer = ({
  dataKey,
  columnData,
  label,
  disableSort,
  sortBy,
  sortDirection,
}: HeaderRendererParams) => {
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
  cellDataGetter: CellDataGetter;
  cellRenderer: CellRendererFunc;
  defaultSortDirection: SortDirection;
  headerRenderer: HeaderRenderFunc;
  flexShrink: number;
  flexGrow: number;
  style: any;
}

export const Column: React.FC<ColumnProps> = props => {
  return <VColumn {...props} />;
};

Column.defaultProps = {
  cellDataGetter: _cellDataGetter,
  cellRenderer: _cellRenderer,
  defaultSortDirection: SortDirection.ASC,
  headerRenderer: _cellHeaderRenderer,
  flexShrink: 1,
  flexGrow: 0,
  style: {},
};
