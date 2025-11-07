import React from "react";
import "./components.css";

const DataTable = ({ data, onDataChange }) => {
  const handleInputChange = (e, rowIndex, key) => {
    const newData = [...data];
    // Handle numeric vs text values based on the input type
    const value =
      e.target.type === "number" ? e.target.valueAsNumber : e.target.value;
    newData[rowIndex][key] = isNaN(value) ? e.target.value : value;
    onDataChange(newData);
  };

  const addRow = () => {
    // Add a new row with a default text label for x
    const newRow = { x: "Nouveau", y: 0 };
    onDataChange([...data, newRow]);
  };

  const removeRow = (rowIndex) => {
    const newData = data.filter((_, index) => index !== rowIndex);
    onDataChange(newData);
  };

  if (!data || data.length === 0) {
    return (
      <div>
        <p>No data to display.</p>
        <button className="add-btn" onClick={addRow}>
          Add Row
        </button>
      </div>
    );
  }

  const headers = Object.keys(data[0]);

  return (
    <div className="data-table-container">
      <table className="data-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((key) => (
                <td key={key}>
                  <input
                    type={key === "y" ? "number" : "text"} // Dynamically set type
                    value={row[key]}
                    onChange={(e) => handleInputChange(e, rowIndex, key)}
                  />
                </td>
              ))}
              <td>
                <button
                  className="remove-btn"
                  onClick={() => removeRow(rowIndex)}
                >
                  &times;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="add-btn" onClick={addRow}>
        Add Row
      </button>
    </div>
  );
};

export default DataTable;
