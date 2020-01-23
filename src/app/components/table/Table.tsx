import * as React from "react";
import { PureComponent } from "react";
import { orderBy } from "lodash";
import clsx from "clsx";

import "./table.scss";

// You can import any component you want as a named export from 'react-virtualized', eg
import { Table as VTable, SortDirection } from "react-virtualized";
// But if you only use a few react-virtualized components,
// And you're concerned about increasing your application's bundle size,
// You can directly import only the components you need, like so:
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";
import { Column } from "./Column";

export interface TableProps {
  // An array of items representing the table rows
  data: any[];
  // Applies a striped style to the table rows
  striped?: boolean;
}

export interface TableState {
  data: any[];
  sortBy?: string;
  sortDirection?: SortDirection;
}

export class Table extends PureComponent<TableProps, TableState> {
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: props.data, // Naturally sorted data
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { sortBy, sortDirection } = this.state;

    if (prevProps.data != this.props.data) {
      // Set new dataset
      this.setState({ data: prevProps.data });
    }

    if (
      prevState.sortBy !== sortBy ||
      prevState.sortDirection !== sortDirection
    ) {
      // Apply sorting
      let { data } = this.props;
      if (sortBy) {
        data = orderBy(
          data,
          item => item[sortBy],
          sortDirection === SortDirection.DESC ? "desc" : "asc",
        );
      }
      this.setState({ data });
    }
  }

  render() {
    const { data, sortBy, sortDirection } = this.state;
    const length = data.length;
    return (
      <div className="table" data-count={length}>
        <AutoSizer>
          {({ height, width }) => (
            <VTable
              height={height}
              width={width}
              rowClassName={this._rowClassName}
              {...this.props}
              sort={this._sort}
              sortBy={sortBy}
              sortDirection={sortDirection}
              rowCount={length}
              rowGetter={({ index }) => data[index]}
              overscanRowCount={20}
            >
              {this.props.children}
            </VTable>
          )}
        </AutoSizer>
      </div>
    );
  }

  _rowClassName = ({ index }) => {
    if (this.props.striped && index > 0) {
      return index % 2 ? "row-dark" : "";
    }
  };

  _sort = ({ sortBy, sortDirection }) => {
    const { sortBy: prevSortBy, sortDirection: prevSortDirection } = this.state;

    // If list was sorted DESC by this column.
    // Rather than switch to ASC, return to "natural" order.
    if (prevSortBy === sortBy && prevSortDirection === SortDirection.DESC) {
      sortBy = null;
      sortDirection = null;
    }

    this.setState({ sortBy, sortDirection });
  };
}

export { Column };
