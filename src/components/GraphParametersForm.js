import React from 'react';
import './components.css';

const GraphParametersForm = ({ graphParameters, onParametersChange }) => {
  const handleChange = (e) => {
    onParametersChange({
      ...graphParameters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="graph-parameters-form">
      <h3>Chart</h3>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={graphParameters.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="xAxisLabel">X-Axis Label</label>
        <input
          type="text"
          id="xAxisLabel"
          name="xAxisLabel"
          value={graphParameters.xAxisLabel}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="yAxisLabel">Y-Axis Label</label>
        <input
          type="text"
          id="yAxisLabel"
          name="yAxisLabel"
          value={graphParameters.yAxisLabel}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default GraphParametersForm;
