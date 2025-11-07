import React, { useRef } from "react";
import GraphParametersForm from "./GraphParametersForm";
import GraphPreview from "./GraphPreview";
import "./components.css";

const ChartPanel = ({
  graphParameters,
  onParametersChange,
  data,
  selectedGraphType,
}) => {
  const chartRef = useRef(null);

  const handleExport = () => {
    if (chartRef.current) {
      const svg = chartRef.current.querySelector("svg");
      if (svg) {
        // Add a small delay to ensure styles are applied
        setTimeout(() => {
          const svgString = new XMLSerializer().serializeToString(svg);
          const width = svg.width.baseVal.value;
          const height = svg.height.baseVal.value;

          const img = new Image();
          // Create a blob to handle potential special characters
          const svgBlob = new Blob([svgString], {
            type: "image/svg+xml;charset=utf-8",
          });
          const url = URL.createObjectURL(svgBlob);

          img.onload = () => {
            const canvas = document.createElement("canvas");
            // Set a higher resolution for better quality
            const scale = 2;
            canvas.width = width * scale;
            canvas.height = height * scale;

            const ctx = canvas.getContext("2d");
            ctx.scale(scale, scale);
            ctx.drawImage(img, 0, 0);

            const pngUrl = canvas.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = pngUrl;
            link.download = `${graphParameters.title || "chart"}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          };

          img.src = url;
        }, 100);
      }
    }
  };

  return (
    <div className="chart-panel">
      <div className="chart-panel-header">
        <GraphParametersForm
          graphParameters={graphParameters}
          onParametersChange={onParametersChange}
        />
        <button onClick={handleExport} className="export-btn">
          Export to PNG
        </button>
      </div>
      <GraphPreview
        ref={chartRef}
        data={data}
        graphParameters={graphParameters}
        selectedGraphType={selectedGraphType}
      />
    </div>
  );
};

export default ChartPanel;
