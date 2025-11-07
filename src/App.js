import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import DataPanel from "./components/DataPanel";
import ChartPanel from "./components/ChartPanel";
import GraphTypeSidebar from "./components/GraphTypeSidebar";

function App() {
  // Initial sample data
  const [data, setData] = useState([
    { x: "Jan", y: 65 },
    { x: "Fev", y: 59 },
    { x: "Mar", y: 80 },
    { x: "Avr", y: 81 },
    { x: "Mai", y: 56 },
    { x: "Juin", y: 55 },
    { x: "Juil", y: 40 },
    { x: "Août", y: 52 },
    { x: "Sep", y: 78 },
    { x: "Oct", y: 63 },
    { x: "Nov", y: 72 },
    { x: "Dec", y: 90 },
  ]);

  const [graphParameters, setGraphParameters] = useState({
    title: "Ventes Mensuelles 2025",
    xAxisLabel: "Mois",
    yAxisLabel: "Ventes (k€)",
  });

  const [selectedGraphType, setSelectedGraphType] = useState("line");

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <DataPanel data={data} onDataChange={setData} />
        <ChartPanel
          graphParameters={graphParameters}
          onParametersChange={setGraphParameters}
          data={data}
          selectedGraphType={selectedGraphType}
        />
        <GraphTypeSidebar
          selectedGraphType={selectedGraphType}
          onGraphTypeChange={setSelectedGraphType}
        />
      </main>
    </div>
  );
}

export default App;
