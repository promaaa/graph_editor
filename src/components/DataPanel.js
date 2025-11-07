import React from 'react';
import DataTable from './DataTable';
import './components.css';

const DataPanel = ({ data, onDataChange }) => {
  return (
    <div className="data-panel">
      <h3>Data</h3>
      <DataTable data={data} onDataChange={onDataChange} />
    </div>
  );
};

export default DataPanel;
