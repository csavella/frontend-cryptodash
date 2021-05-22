function ToggleList({ columns, onColumnToggle, toggles }) {
  return (
    <div className="text-center">
      {columns
        .map((column) => ({
          ...column,
          toggle: toggles[column.dataField],
        }))
        .map((column, index) =>
          index === 0 ? (
            <button
              className="btn btn-link"
              type="button"
              key={column.dataField}
              id={column.dataField}
              onClick={() => {
                //onColumnToggle(column.dataField);
                onColumnToggle(columns[columns.length - 1].dataField);
              }}
            >
              Edit Table
            </button>
          ) : null
        )}
    </div>
  );
}

export default ToggleList;
