import React from "react";
import "./components.css";

// New SVG Icons for chart types
const LineIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12l5-7 5 10 5-7 4 5" />
    <circle cx="3" cy="12" r="1" fill="currentColor" />
    <circle cx="8" cy="5" r="1" fill="currentColor" />
    <circle cx="13" cy="15" r="1" fill="currentColor" />
    <circle cx="18" cy="8" r="1" fill="currentColor" />
    <circle cx="22" cy="13" r="1" fill="currentColor" />
  </svg>
);

const BarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <rect x="4" y="4" width="4" height="16" rx="1" />
    <rect x="10" y="10" width="4" height="10" rx="1" />
    <rect x="16" y="7" width="4" height="13" rx="1" />
  </svg>
);

const PieIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M10 3.22c.9-.47 1.9-.72 2-.72 5.52 0 10 4.48 10 10 0 1.93-.55 3.74-1.5 5.28L12 12V3.22z" />
    <path d="M12 12l-9.28 5.5A9.95 9.95 0 0 1 2 12c0-5.52 4.48-10 10-10 0 .1-.08.18-.13.28L12 12z" />
  </svg>
);

const GRAPH_TYPES = [
  { id: "line", label: "Line", icon: <LineIcon /> },
  { id: "bar", label: "Bar", icon: <BarIcon /> },
  { id: "pie", label: "Pie", icon: <PieIcon /> },
];

const GraphTypeSidebar = ({ selectedGraphType, onGraphTypeChange }) => {
  return (
    <div className="sidebar">
      <h3>Graph Types</h3>
      <div className="sidebar-buttons">
        {GRAPH_TYPES.map((type) => (
          <button
            key={type.id}
            className={selectedGraphType === type.id ? "active" : ""}
            onClick={() => onGraphTypeChange(type.id)}
            title={type.label}
          >
            {type.icon}
            <span>{type.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GraphTypeSidebar;
