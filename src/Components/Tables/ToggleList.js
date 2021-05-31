import { Form } from "react-bootstrap";

function ToggleList({ columns, onColumnToggle, toggles }) {
  return (
    <div
      className="text-center"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      {columns
        .map((column) => ({
          ...column,
          toggle: toggles[column.dataField],
        }))
        .map((column, index) =>
          index > 1 ? (
            <Form.Check
              type="switch"
              key={column.dataField}
              inline
              label={column.text}
              id={column.dataField}
              checked={column.toggle}
              aria-checked={column.toggle ? "true" : "false"}
              onChange={() => {
                onColumnToggle(column.dataField);
              }}
            />
          ) : null
        )}
    </div>
  );
}

export default ToggleList;
