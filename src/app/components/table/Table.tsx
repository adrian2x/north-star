import * as React from "react";
import { PureComponent } from "react";
import { orderBy } from "lodash";
import clsx from "clsx";

import "./table.scss";

// You can import any component you want as a named export from 'react-virtualized', eg
import { Column, Table as VTable, SortDirection } from "react-virtualized";
// But if you only use a few react-virtualized components,
// And you're concerned about increasing your application's bundle size,
// You can directly import only the components you need, like so:
import AutoSizer from "react-virtualized/dist/commonjs/AutoSizer";

export interface TableProps {
  data: any[];
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

  componentWillUpdate(nextProps, nextState) {
    const { sortBy: prevSortBy, sortDirection: prevSortDirection } = this.state;

    if (nextProps.data != this.props.data) {
      this.setState({ data: nextProps.data });
    }

    if (
      nextState.sortBy !== prevSortBy ||
      nextState.sortDirection !== prevSortDirection
    ) {
      // Apply sorting
      let { data } = nextProps;
      const { sortBy, sortDirection } = nextState;

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
    return (
      <div className="table" data-count={data.length}>
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
              overscanRowCount={20}
              rowCount={data.length}
              rowGetter={({ index }) => data[index]}
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
