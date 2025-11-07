import React, { forwardRef } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import "./components.css";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const GraphPreview = forwardRef(
  ({ data, graphParameters, selectedGraphType }, ref) => {
    const chartMargin = { top: 5, right: 20, left: 0, bottom: 20 }; // Add space at the bottom

    const renderChart = () => {
      switch (selectedGraphType) {
        case "line":
          return (
            <LineChart data={data} margin={chartMargin}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" name={graphParameters.xAxisLabel} />
              <YAxis name={graphParameters.yAxisLabel} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="y" stroke="#8884d8" />
            </LineChart>
          );
        case "bar":
          return (
            <BarChart data={data} margin={chartMargin}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="x" name={graphParameters.xAxisLabel} />
              <YAxis name={graphParameters.yAxisLabel} />
              <Tooltip />
              <Legend />
              <Bar dataKey="y" fill="#8884d8" />
            </BarChart>
          );
        case "pie":
          return (
            <PieChart>
              <Pie
                data={data}
                dataKey="y"
                nameKey="x"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend wrapperStyle={{ bottom: 0 }} />
            </PieChart>
          );
        default:
          return <p>Select a graph type</p>;
      }
    };

    return (
      <div className="graph-preview">
        <h4>{graphParameters.title}</h4>
        <div className="chart-wrapper" ref={ref}>
          <ResponsiveContainer width="100%" height="100%">
            {renderChart()}
          </ResponsiveContainer>
        </div>
      </div>
    );
  },
);

export default GraphPreview;
